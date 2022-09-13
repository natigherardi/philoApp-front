import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import QuoteDetail from "../../components/QuoteDetail/QuoteDetail";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";

const QuoteDetailPage = (): JSX.Element => {
  const { currentQuoteDetail } = useAppSelector((state) => state.quotes);

  const [quoteDetail, setQuoteDetail] = useState(currentQuoteDetail);

  const { id } = useParams();
  const { getQuoteById } = useQuotes();

  useEffect(() => {
    (async () => {
      const { quote } = await getQuoteById(id as string);
      setQuoteDetail(quote);
    })();
  }, [getQuoteById, id]);

  return (
    <>
      <Header />
      <QuoteDetail quote={quoteDetail}></QuoteDetail>
    </>
  );
};

export default QuoteDetailPage;
