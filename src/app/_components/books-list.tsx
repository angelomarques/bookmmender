import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent } from "@/components/ui/card";
import { BookSchemaType } from "@/service/recommendations/schema";
import Image from "next/image";

const list: BookSchemaType[] = [
  {
    title: "Book Title",
    author: "John Doe",
    synopsis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, iure alias laboriosam ipsa fugit voluptate.",
    why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi quas quisquam consequuntur velit vero!",
  },
  {
    title: "Book Title 2",
    author: "Maria Carey",
    synopsis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, iure alias laboriosam ipsa fugit voluptate.",
    why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi quas quisquam consequuntur velit vero!",
  },
  {
    title: "Book Title 3",
    author: "Michael Jordan",
    synopsis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, iure alias laboriosam ipsa fugit voluptate.",
    why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi quas quisquam consequuntur velit vero!",
  },
];

export function BooksList() {
  return (
    <div>
      <div className="space-y-4">
        {list.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <Image
                width={300}
                height={200}
                src="https://picsum.photos/200/300"
                alt={`Cover of "${item.title}"`}
                className="w-full aspect-video rounded-md object-cover"
              />
              <div className="mt-4">
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <p className="text-sm text-slate-300 mt-2">
                  Book by {item.author}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">Synopsis</h3>
                <p className="text-sm">{item.synopsis}</p>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold">Why this book</h3>
                <p className="text-sm">{item.why}</p>
              </div>

              <CardAction className="mt-4">
                <Button>Search on Google</Button>
              </CardAction>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
