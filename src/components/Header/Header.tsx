import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        height="100"
        width="229"
        className="header__image"
      />
      <div className="header__menu-container">
        <Menu />
      </div>
    </HeaderStyled>
  );
};

export default Header;
