import FormContainer from "./FormUserStyled";

const FormUser = (): JSX.Element => {
  return (
    <FormContainer>
      <form>
        <div className="form">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            className="form__input"
          />
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            className="form__input"
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            className="form__input"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormContainer>
  );
};

export default FormUser;
