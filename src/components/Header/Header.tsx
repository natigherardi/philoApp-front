import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/images/HeaderImage.png"
        alt="philoApp-logo"
        height="96"
        width="242"
        className="header__image"
      />
      <div className="header__menu-container">
        <Menu />
      </div>
    </HeaderStyled>
  );
};

export default Header;
