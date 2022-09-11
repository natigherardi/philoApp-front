import Header from "../../components/Header/Header";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import QuotesList from "../../components/QuotesList/QuotesList";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <QuoteForm></QuoteForm>
      <QuotesList />
    </>
  );
};

export default HomePage;
