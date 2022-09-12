import Header from "../../components/Header/Header";
import QuoteDetail from "../../components/QuoteDetail/QuoteDetail";
import QuotesList from "../../components/QuotesList/QuotesList";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <QuoteDetail
        isPrivate={true}
        quote={{
          textContent:
            "test text test text test text test text test textv v v vvtest texttest texttest text",
          author: "test author",
          image: "test url image",
          owner: "test owner",
          id: "12",
          backUpImage:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goofy-1568726558.jpg",
          book: "test book",
          school: "test school",
          year: "1",
        }}
      ></QuoteDetail>
      <QuotesList />
    </>
  );
};

export default HomePage;
