import styled from "styled-components";
import docStyle from "../../style/style";

const LoginFormContainer = styled.form`
  background-color: ${docStyle.colors.primaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  display: flex;

  @media (min-width: ${docStyle.mediaBreakpoint.small}) {
    flex-direction: column;
    gap: 30px;
  }
  @media (min-width: ${docStyle.mediaBreakpoint.big}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
  }
  .login-form {
    &__fields {
      display: flex;

      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        flex-direction: column;
        gap: 30px;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    &__field-group {
      display: flex;
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        flex-direction: column;
        gap: 10px;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        flex-direction: row;
        align-items: baseline;
        flex-grow: 1;
        justify-content: space-between;
        padding: 40px;
        width: 40%;
        align-items: center;
        gap: 30px;
      }
      text-align: start;
    }
    &__input {
      box-sizing: border-box;
      height: 70px;
      border-radius: 16px;
      box-shadow: 0px 3px 8px grey;
      border: 20px black;
      font-size: 24px;
      font-family: inherit;
      font-weight: 300;
      padding: 0 10px;
    }
    &__label {
      font-size: ${docStyle.fontSize.small};
    }
  }
  .--button {
    @media (min-width: ${docStyle.mediaBreakpoint.small}) {
      align-self: center;
    }
    @media (min-width: ${docStyle.mediaBreakpoint.big}) {
      justify-content: flex-start;
      padding-right: 36px;
    }
  }
`;

export default LoginFormContainer;
