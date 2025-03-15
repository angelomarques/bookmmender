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
import { questions } from "@/service/questions";
import { QuestionType } from "@/service/questions/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  genre: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  mood: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  agePeriod: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  bookLength: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

export function Questions() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genre: [],
      mood: [],
      agePeriod: [],
      bookLength: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data);
    alert("submitted");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Carousel
          opts={{
            align: "start",
            watchDrag: false,
          }}
          className="w-full max-w-sm"
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
  formControl: Control<z.infer<typeof FormSchema>>;
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
