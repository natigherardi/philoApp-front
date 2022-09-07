import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Header from "../../components/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <QuoteCard
        quote={{
          author: "Aristoteles",
          image:
            "https://www.alejandradeargos.com/images/filosofos/Aristoteles.jpg",
          textContent:
            "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica.",
        }}
      />
    </>
  );
};

export default HomePage;
