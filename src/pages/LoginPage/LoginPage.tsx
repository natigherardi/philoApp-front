import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <LoginPageStyled>
        <h1>Log In</h1>
        <div className="login-page__form-container">
          <LoginForm />
          <div className="login-page__register-offer">
            <span className="login-page__offer login-page__offer--description">
              Don't have an account yet?
            </span>
            <NavLink to={"/register"} className="login-page__offer--link">
              Register
            </NavLink>
          </div>
        </div>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
