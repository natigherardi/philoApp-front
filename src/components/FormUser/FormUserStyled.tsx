import styled from "styled-components";
import docStyle from "../../style/style";

const FormContainer = styled.div`
  padding: ${docStyle.padding.large};
  background-color: ${docStyle.colors.secondaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__input {
      height: 60px;
      border-radius: ${docStyle.borderRadius.medium};
      margin-bottom: 10px;
      box-shadow: 0px 3px 8px grey;
      border: 20px black;
      font-size: ${docStyle.fontSize.small};
      font-family: inherit;
      font-weight: 300;
    }
    &__label {
      font-size: ${docStyle.fontSize.small};
    }
  }
`;

export default FormContainer;
