import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import QuoteDetail from "../../components/QuoteDetail/QuoteDetail";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";

const QuoteDetailPage = (): JSX.Element => {
  const { currentQuoteDetail } = useAppSelector((state) => state.quotes);

  const { id } = useParams();
  const { getQuoteById } = useQuotes();
  useEffect(() => {
    (async () => {
      getQuoteById(id as string);
    })();
  }, [getQuoteById, id]);
  return (
    <>
      <Header />
      <QuoteDetail isPrivate={true} quote={currentQuoteDetail}></QuoteDetail>
    </>
  );
};

export default QuoteDetailPage;
