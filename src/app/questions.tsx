"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function Questions() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
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
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <QuestionItem formControl={form.control} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </form>
    </Form>
  );
}

interface QuestionItemProps {
  formControl: Control<z.infer<typeof FormSchema>>;
}

export function QuestionItem({ formControl }: QuestionItemProps) {
  return (
    <div>
      <Card>
        {/* <CardHeader>
          <CardTitle>Title of the Question</CardTitle>
          <CardDescription>Description of the question</CardDescription>
        </CardHeader> */}
        <CardContent>
          <FormField
            control={formControl}
            name="items"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Sidebar</FormLabel>
                  <FormDescription>
                    Select the items you want to display in the sidebar.
                  </FormDescription>
                </div>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={formControl}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
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

          <div className="flex justify-between w-full mt-5">
            <Button type="button" variant="secondary">
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <Button type="button">
              <span>Continue</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
