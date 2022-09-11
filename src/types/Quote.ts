export interface Quote {
  textContent: string;
  author: string;
  image: string | File;
  backUpImage?: string;
  owner: string;
  id?: string;
  favoritedBy?: string[];
  year?: number;
  school?: string;
  book?: string;
}

export interface QuotesStore {
  publicQuotes: Quote[];
  privateQuotes: Quote[];
}
