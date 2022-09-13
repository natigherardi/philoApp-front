import { useEffect } from "react";
import Header from "../../components/Header/Header";
import QuotesList from "../../components/QuotesList/QuotesList";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";

const MyQuotesPage = (): JSX.Element => {
  const { privateQuotes } = useAppSelector((state) => state.quotes);
  const { loadPrivateQuotes } = useQuotes();
  const { id, token } = useAppSelector((state) => state.userSession.userData);

  useEffect(() => {
    (async () => {
      await loadPrivateQuotes(token, id);
    })();
  }, [loadPrivateQuotes, id, token]);

  return (
    <>
      <Header />
      <h1>My Quotes</h1>
      <QuotesList quotesToRender={privateQuotes} />
    </>
  );
};

export default MyQuotesPage;
