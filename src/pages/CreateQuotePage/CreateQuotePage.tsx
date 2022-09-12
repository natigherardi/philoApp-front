import Header from "../../components/Header/Header";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const CreateQuotePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <h2 className="create-quote-page__title">Create your own quote</h2>
      <QuoteForm />
    </>
  );
};

export default CreateQuotePage;
