import styled from "styled-components";
import docStyle from "../../style/style";

const FormContainer = styled.div`
  padding: ${docStyle.padding.large};
  background-color: ${docStyle.colors.primaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  margin: 20px 0;
  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__input {
      height: 60px;
      border-radius: ${docStyle.borderRadius.medium};
      margin-bottom: ${docStyle.margin.small};
      box-shadow: 0px 3px 8px grey;
      border: 20px black;
      font-size: ${docStyle.fontSize.small};
      font-family: inherit;
      font-weight: ${docStyle.fontWeight.light};
      padding: 0 ${docStyle.padding.small};
    }
    &__label {
      font-size: ${docStyle.fontSize.small};
    }
  }
`;

export default FormContainer;
