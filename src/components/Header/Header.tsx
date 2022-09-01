import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        height="120"
        width="280"
      />
    </HeaderStyled>
  );
};

export default Header;
