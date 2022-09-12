import Header from "../../components/Header/Header";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import CreateQuotePageStyled from "./CreateQuotePageStyled";

const CreateQuotePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <CreateQuotePageStyled>
        <h2 className="create-quote-page__title">Create your own quote</h2>
        <QuoteForm />
      </CreateQuotePageStyled>
    </>
  );
};

export default CreateQuotePage;
