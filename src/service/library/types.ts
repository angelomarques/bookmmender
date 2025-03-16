export interface LibraryBookApiResponse {
  docs: { key: string; cover_edition_key: string }[];
}

export interface LibraryBookType {
  coverUrl?: string;
}
