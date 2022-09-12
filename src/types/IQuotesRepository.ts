import { Item } from "./IUserRepository";

export interface IQuotesRepository<T extends Item> {
  getAllQuotes: () => Promise<T[]>;
  getQuotesByUser: (token: string, id: string) => Promise<T>;
  createQuote: (quote: FormData, token: string, userId: string) => Promise<T>;
  getQuoteById: (quoteId: string) => Promise<T>;
}
