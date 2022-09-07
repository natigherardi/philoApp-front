import axios from "axios";
import { IQuotesRepository } from "../types/IQuotesRepository";
import { Item } from "../types/IUserRepository";

class QuotesRepository<T extends Item> implements IQuotesRepository<T> {
  constructor(public apiUrl: string) {}
  getAllQuotes = async () => {
    try {
      const { data: listOfQuotes } = await axios.get(
        `${this.apiUrl}/quotes/all-quotes`
      );
      return listOfQuotes;
    } catch (error) {
      return error;
    }
  };
}

export default QuotesRepository;
