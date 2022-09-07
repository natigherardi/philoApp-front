export default interface SessionInfo {
  userData: {
    id: string;
    username: string;
    token: string;
    quotesFavorited?: string[];
    quotesCreated?: string[];
  };
  isLoggedIn: boolean;
}
