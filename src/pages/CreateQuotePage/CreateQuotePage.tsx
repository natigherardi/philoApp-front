import Header from "../../components/Header/Header";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import CreateQuotePageStyled from "./CreateQuotePageStyled";

const CreateQuotePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <CreateQuotePageStyled>
        <h1>Create your own quote</h1>
        <QuoteForm />
      </CreateQuotePageStyled>
    </>
  );
};

export default CreateQuotePage;
