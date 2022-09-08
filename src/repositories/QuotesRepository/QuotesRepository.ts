import axios from "axios";
import { config } from "process";
import { useAppSelector } from "../../store/hooks";
import { IQuotesRepository } from "../../types/IQuotesRepository";
import { Item } from "../../types/IUserRepository";

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

  getQuotesByUser = async (token: string, id: string) => {
    const reqConfig = {
      headers: { Authorization: `Bearer ${token}` },
      params: { id },
    };
    try {
      const { data: usersLists } = await axios.get(
        `${this.apiUrl}/quotes/all-quotes`,
        reqConfig
      );
      return usersLists;
    } catch (error) {
      return error;
    }
  };
}

export default QuotesRepository;
