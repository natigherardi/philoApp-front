import FormUser from "../../components/FormUser/FormUser";
import Header from "../../components/Header/Header";
import RegisterStyledPage from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <RegisterStyledPage>
        <h2 className="register-page__title">Register</h2>
        <p className="register-page__description">
          Registration will allow you to create your own quotes and add your
          favourite ones to your lists
        </p>
        <FormUser />
      </RegisterStyledPage>
    </>
  );
};

export default RegisterPage;
