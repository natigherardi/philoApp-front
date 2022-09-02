import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        height="150"
        width="400"
        className="header__image"
      />
    </HeaderStyled>
  );
};

export default Header;
