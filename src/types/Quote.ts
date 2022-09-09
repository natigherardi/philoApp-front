interface Quote {
  textContent: string;
  author: string;
  image: string | File;
  owner: string;
  id?: string;
  favoritedBy?: string[];
  year?: number;
  school?: string;
  book?: string;
}

export default Quote;
