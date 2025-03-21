import { BooksList } from "./books-list";
import { ErrorDescription } from "./error-description";
import { Questions } from "./questions";

export function Recommender() {
  return (
    <div className="max-w-6xl mx-auto h-full flex items-center justify-center">
      <Questions />

      <BooksList />

      <ErrorDescription />
    </div>
  );
}
