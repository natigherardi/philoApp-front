import axios from "axios";
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
      const response = await axios.get(
        `${this.apiUrl}/quotes/quotesByUser`,
        reqConfig
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  deleteQuote = async (userId: string, token: string, quoteId: string) => {
    const reqConfig = {
      headers: { Authorization: `Bearer ${token}` },
      data: { user: userId },
      params: { id: quoteId },
    };

    try {
      const response = await axios.delete(
        `${this.apiUrl}/quotes/quote`,
        reqConfig
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  createQuote = async (quote: FormData, token: string, userId: string) => {
    const reqConfig = {
      headers: { Authorization: `Bearer ${token}` },

      params: { id: userId },
    };
    try {
      const response = await axios.post(
        `${this.apiUrl}/quotes/quote`,
        quote,
        reqConfig
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };

  getQuoteById = async (quoteId: string) => {
    try {
      const response = await axios.get(
        `${this.apiUrl}/quotes/quote/${quoteId}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default QuotesRepository;
