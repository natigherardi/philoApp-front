import { Item } from "./IUserRepository";

export interface IQuotesRepository<T extends Item> {
  getAllQuotes: () => Promise<T[]>;
}
