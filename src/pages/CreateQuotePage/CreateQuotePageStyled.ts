import styled from "styled-components";
import docStyle from "../../style/style";

const CreateQuotePageStyled = styled.section`
  background-color: ${docStyle.colors.secondaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  padding: ${docStyle.padding.medium};
  .create-quote-page {
    &__title {
      font-weight: ${docStyle.fontWeight.bold};
      font-size: ${docStyle.fontSize.medium};
      color: ${docStyle.colors.TypographyColor};
      margin: 10px 0;
    }
  }
`;

export default CreateQuotePageStyled;
