export interface QuoteCreated {
  textContent: string;
  author: string;
  image: string | File;
  year: string;
  school: string;
  book: string;
}
export interface Quote extends QuoteCreated {
  owner: string;
  backUpImage: string;
  id: string;
  favoritedBy: string[];
}
export interface QuotesStore {
  publicQuotes: Quote[];
  privateQuotes: Quote[];
}
