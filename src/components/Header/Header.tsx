import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        height="100"
        width="260"
        className="header__image"
      />
    </HeaderStyled>
  );
};

export default Header;
