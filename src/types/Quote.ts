interface Quote {
  textContent: string;
  author: string;
  user: string;
  image: string | File;
  owner: string;
  favoritedBy?: string[];
  year?: number;
  school?: string;
  book?: string;
}

export default Quote;
