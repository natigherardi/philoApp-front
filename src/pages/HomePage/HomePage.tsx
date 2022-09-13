import { useEffect } from "react";
import Header from "../../components/Header/Header";
import QuotesList from "../../components/QuotesList/QuotesList";
import Search from "../../components/Search/Search";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";

const HomePage = (): JSX.Element => {
  const { publicQuotes } = useAppSelector((state) => state.quotes);

  const { loadPublicQuotes } = useQuotes();

  useEffect(() => {
    (async () => {
      await loadPublicQuotes();
    })();
  }, [loadPublicQuotes]);

  return (
    <>
      <Header />
      <Search></Search>
      <h1>All Quotes</h1>
      <QuotesList quotesToRender={publicQuotes} />
    </>
  );
};

export default HomePage;
