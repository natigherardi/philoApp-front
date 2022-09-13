import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import QuotesList from "../../components/QuotesList/QuotesList";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";

const FilterPage = (): JSX.Element => {
  const { publicQuotes } = useAppSelector((state) => state.quotes);

  const { loadPublicQuotes } = useQuotes();

  const { author } = useParams();

  useEffect(() => {
    (async () => {
      await loadPublicQuotes();
    })();
  }, [loadPublicQuotes]);

  const quotesFiltered = publicQuotes.filter(
    (quote) => quote.author === author
  );

  return (
    <>
      <Header />
      <h1>Quotes by {author}</h1>
      <QuotesList quotesToRender={quotesFiltered}></QuotesList>
    </>
  );
};

export default FilterPage;
