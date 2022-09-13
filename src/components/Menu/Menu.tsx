import { slide as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
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
      {isLoggedIn && (
        <>
          <NavLink to={"/my-quotes"} className="bm-item">
            MyQuotes
          </NavLink>
          <NavLink to={"/create-quote"} className="bm-item">
            Create a quote
          </NavLink>
          <NavLink to={"/login"} onClick={handleLogOut} className="bm-item">
            Log Out
          </NavLink>
        </>
      )}

      {!isLoggedIn && (
        <>
          <NavLink to={"/register"} className="bm-item">
            Register
          </NavLink>
          <NavLink to={"/login"} className="bm-item">
            Log In
          </NavLink>
        </>
      )}
    </BurgerMenu>
  );
};

export default Menu;
