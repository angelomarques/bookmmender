import { LibraryBookType } from "../library/types";
import { BookSchemaType } from "./schema";

export type BookRecommendationType = BookSchemaType & LibraryBookType;
