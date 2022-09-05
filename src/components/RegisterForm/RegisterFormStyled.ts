import styled from "styled-components";
import docStyle from "../../style/style";

const FormContainer = styled.form`
  padding: ${docStyle.padding.large};
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
  .form {
    &__fields {
      display: flex;

      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        flex-direction: column;
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
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        flex-direction: row;
        align-items: baseline;
        flex-grow: 1;
        justify-content: space-between;
        padding: 40px;
        width: 40%;
        align-items: center;
        gap: 10px;
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
    justify-content: flex-end;
  }
`;

export default FormContainer;
