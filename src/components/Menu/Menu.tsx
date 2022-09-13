import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useUserSession } from "../../hooks/useUserSession/useUserSession";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logoutUserActionCreator } from "../../store/user/userSessionSlice";
import "./menu.css";

const Menu = (): JSX.Element => {
  const { isLoggedIn } = useAppSelector((state) => state.userSession);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserActionCreator());
  };

  return (
    <BurgerMenu right noOverlay>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/my-quotes"}>MyQuotes</NavLink>
      <NavLink to={"/create-quote"}>Create a quote</NavLink>
      {!isLoggedIn && (
        <>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Log In</NavLink>
        </>
      )}
      <span onClick={handleLogOut}>Log Out</span>
    </BurgerMenu>
  );
};

export default Menu;
