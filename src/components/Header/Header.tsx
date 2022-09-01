import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        min-height="100"
        min-width="260"
        className="header__image"
      />
    </HeaderStyled>
  );
};

export default Header;
