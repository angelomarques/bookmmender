"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { getErrorMessage } from "@/lib/utils";
import { questions } from "@/service/questions";
import {
  QuestionsSchema,
  QuestionsSchemaType,
} from "@/service/questions/schema";
import { QuestionType } from "@/service/questions/types";
import { useRecommendationsStore } from "@/store/recommendations";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";

export function Questions() {
  const form = useForm<QuestionsSchemaType>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      genre: [],
      mood: [],
      agePeriod: [],
      bookLength: [],
    },
  });
  const setBooks = useRecommendationsStore((state) => state.setBooks);
  const setStatus = useRecommendationsStore((state) => state.setStatus);
  const setQuestions = useRecommendationsStore((state) => state.setQuestions);
  const setErrorMessage = useRecommendationsStore(
    (state) => state.setErrorMessage
  );
  const status = useRecommendationsStore((state) => state.status);

  const posthog = usePostHog();

  const isFormHidden = status !== "unset";

  const { mutateAsync: createRecommendation } =
    api.recommendation.create.useMutation();

  useEffect(() => {
    if (status === "unset") {
      form.reset();
    }
  }, [status, form]);

  useEffect(() => {
    posthog.capture("bookmmender_page_visited");
  }, []);

  function onSubmit(data: QuestionsSchemaType) {
    const arraysValues = Object.values(data);
    const isAllEmpty = arraysValues.every((array) => array.length === 0);

    if (isAllEmpty) {
      toast.error("Please answer at least one question");
      return;
    }

    setQuestions(data);

    toast.promise(() => createRecommendation({ questions: data }), {
      success: (data) => {
        setStatus("completed");
        setBooks(data);

        return "Recommendation created";
      },
      loading: (() => {
        setStatus("loading");

        return "Loading";
      })(),
      error: (error) => {
        setStatus("failed");
        const errorMessage = getErrorMessage(error);

        setErrorMessage(errorMessage);
        return errorMessage;
      },
    });
  }

  if (isFormHidden) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-screen py-8 flex flex-col justify-center"
      >
        <Carousel
          opts={{
            align: "start",
            watchDrag: false,
          }}
          className="w-full max-w-lg mx-auto"
        >
          <QuestionsCarouselProgress />

          <CarouselContent>
            {questions.map((question) => (
              <CarouselItem key={question.property}>
                <QuestionItem formControl={form.control} {...question} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <QuestionsCarouselButtons />
        </Carousel>
      </form>
    </Form>
  );
}

interface QuestionItemProps extends QuestionType {
  formControl: Control<QuestionsSchemaType>;
}

function QuestionItem({
  formControl,
  title,
  description,
  options,
  property,
}: QuestionItemProps) {
  return (
    <div>
      <Card className="h-[340px]">
        <CardContent>
          <FormField
            control={formControl}
            name={property}
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">{title}</FormLabel>
                  <FormDescription>{description}</FormDescription>
                </div>

                {options.map((item) => (
                  <FormField
                    key={item.value}
                    control={formControl}
                    name={property}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function QuestionsCarouselButtons() {
  const { scrollNext, scrollPrev, slidesCount, currentSlide } = useCarousel();
  const isLastSlide = currentSlide + 1 === slidesCount;

  return (
    <div className="flex justify-between w-full mt-3">
      <Button type="button" variant="secondary" onClick={scrollPrev}>
        <ArrowLeft />
        <span>Back</span>
      </Button>

      {isLastSlide && (
        <Button type="submit">
          <span>Submit</span>
        </Button>
      )}

      {!isLastSlide && (
        <Button type="button" onClick={scrollNext}>
          <span>Continue</span>
        </Button>
      )}
    </div>
  );
}

function QuestionsCarouselProgress() {
  const { slidesCount, currentSlide } = useCarousel();
  const percentage = ((currentSlide + 1) / slidesCount) * 100;
  const progressCount = `${currentSlide + 1} / ${slidesCount}`;

  return (
    <div className="mb-5">
      <p className="text-sm mb-2">{progressCount}</p>
      <Progress value={percentage} />
    </div>
  );
}
