import Header from "../../components/Header/Header";
import QuotesList from "../../components/QuotesList/QuotesList";

const MyQuotesPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1>My Quotes</h1>
      <QuotesList />
    </>
  );
};

export default MyQuotesPage;
