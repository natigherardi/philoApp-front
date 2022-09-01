import styled from "styled-components";
import docStyle from "../../style/style";

const RegisterStyledPage = styled.section`
  background-color: ${docStyle.colors.secondaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  padding: ${docStyle.padding.medium};
  .register-page {
    &__title {
      font-weight: ${docStyle.fontWeight.bold};
      font-size: ${docStyle.fontSize.large};
      color: ${docStyle.colors.TypographyColor};
      margin: 0;
    }

    &__description {
      font-size: ${docStyle.fontSize.medium};
      margin: ${docStyle.margin.medium} 0;
    }
  }
`;

export default RegisterStyledPage;
