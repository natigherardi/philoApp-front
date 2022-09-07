import { SyntheticEvent, useState } from "react";
import { useUserSession } from "../../hooks/useUserSession/useUserSession";
import LargeButton from "../LargeButton/LargeButton";
import LoginFormContainer from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const { loginUser } = useUserSession();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    loginUser(userData);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit} data-testid="form-login">
      <div className="login-form__fields">
        <div className="login-form__field-group">
          <label htmlFor="username" className="login-form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            autoComplete="off"
            className="login-form__input"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-form__field-group">
          <label htmlFor="password" className="login-form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            autoComplete="off"
            className="login-form__input"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-form__field-group --button">
          <LargeButton type="submit" text="Login"></LargeButton>
        </div>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
