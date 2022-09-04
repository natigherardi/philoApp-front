import { SyntheticEvent, useState } from "react";
import FormContainer from "./RegisterFormStyled";
import { useUserSession } from "../../hooks/useUserSession";

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
    <FormContainer>
      <form onSubmit={handleSubmit} data-testid="form-register">
        <div className="form">
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
        <button type="submit">Register</button>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
