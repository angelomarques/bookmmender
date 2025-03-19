import { BooksList } from "./books-list";
import { Questions } from "./questions";

export function Recommender() {
  return (
    <div className="max-w-6xl mx-auto">
      <Questions />

      <BooksList />
    </div>
  );
}
