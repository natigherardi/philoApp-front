import { SyntheticEvent, useState } from "react";
import FormContainer from "./RegisterFormStyled";
import { useUserSession } from "../../hooks/useUserSession";
import LargeButton from "../LargeButton/LargeButton";

const RegisterForm = (): JSX.Element => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const { registerUser } = useUserSession();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    registerUser(userData);
  };

  return (
    <FormContainer onSubmit={handleSubmit} data-testid="form-register">
      <div className="form__fields">
        <div className="form__field-group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            autoComplete="off"
            className="form__input"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form__field-group">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            autoComplete="off"
            className="form__input"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form__field-group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            autoComplete="off"
            className="form__input"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form__field-group --button">
          <LargeButton type="submit" text="Register"></LargeButton>
        </div>
      </div>
    </FormContainer>
  );
};

export default RegisterForm;
