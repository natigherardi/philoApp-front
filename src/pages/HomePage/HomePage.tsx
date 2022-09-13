import Header from "../../components/Header/Header";
import QuotesList from "../../components/QuotesList/QuotesList";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1>All Quotes</h1>
      <QuotesList />
    </>
  );
};

export default HomePage;
