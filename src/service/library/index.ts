import { env } from "@/env";
import axios from "axios";
import { LibraryBookApiResponse, LibraryBookType } from "./types";

const api = axios.create({
  baseURL: env.LIBRARY_API_URL,
  headers: {
    "User-Agent": env.LIBRARY_API_USER_AGENT,
  },
});

export const getBook = async (
  title: string,
  author: string
): Promise<LibraryBookType> => {
  const { data } = await api.get<LibraryBookApiResponse>("/search.json", {
    params: {
      title,
      author,
      limit: 1,
      fields: "cover_edition_key,key",
    },
  });

  const book = data.docs[0];
  const id = book?.cover_edition_key ?? book.key;

  return {
    coverUrl: `${env.LIBRARY_API_BOOK_COVER_HOST_URL}/${id}-L.jpg?default=false`,
  };
};
