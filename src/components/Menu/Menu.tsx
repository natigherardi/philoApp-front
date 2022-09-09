import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = (): JSX.Element => {
  return (
    <BurgerMenu right noOverlay>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Log In</NavLink>
      <NavLink to={"/my-quotes"}>MyQuotes</NavLink>
    </BurgerMenu>
  );
};

export default Menu;
