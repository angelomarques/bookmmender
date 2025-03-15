export type QuestionProperty = "genre" | "mood" | "agePeriod" | "bookLength";

export interface QuestionType {
  property: QuestionProperty;
  title: string;
  description: string;
  options: {
    label: string;
    value: string;
  }[];
}
