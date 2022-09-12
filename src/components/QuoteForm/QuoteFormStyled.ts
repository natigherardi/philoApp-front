import styled from "styled-components";
import docStyle from "../../style/style";

const QuoteFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    gap: 30px;

    &__fields-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__label {
      font-size: ${docStyle.fontSize.medium};
      margin-top: 10px;
    }

    &__field {
      width: 335px;
      height: 50px;
      font-size: ${docStyle.fontSize.xs};
      font-family: inherit;
      border-radius: ${docStyle.borderRadius.medium};
      padding: ${docStyle.padding.small};
      box-shadow: 0px 3px 8px grey;
      border: 20px black;

      &--big {
        height: 80px;
      }

      &--small {
        width: 90px;
      }
    }
  }
`;

export default QuoteFormStyled;
