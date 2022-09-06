import styled from "styled-components";
import docStyle from "../../style/style";

const LoginPageStyled = styled.section`
  background-color: ${docStyle.colors.secondaryColor};
  border-radius: ${docStyle.borderRadius.medium};
  padding: ${docStyle.padding.medium};
  .login-page {
    &__title {
      font-weight: ${docStyle.fontWeight.bold};
      font-size: ${docStyle.fontSize.large};
      color: ${docStyle.colors.TypographyColor};
      margin: 10px;
    }

    &__form-container {
      background-color: ${docStyle.colors.primaryColor};
      border-radius: ${docStyle.borderRadius.medium};
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 10px;
        align-items: center;
        gap: 30px;
        padding-bottom: 30px;
      }
    }

    &__register-offer {
      background-color: ${docStyle.colors.primaryColor};
      border-radius: ${docStyle.borderRadius.medium};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
      box-shadow: 0px 3px 8px grey;
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        height: 280px;
        width: 80%;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        height: 180px;
        width: 300px;
        position: absolute;
        right: 216px;
        bottom: 365px;
      }
    }

    &__offer {
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        font-size: ${docStyle.fontSize.small};
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        font-size: ${docStyle.fontSize.medium};
      }
      &--link {
        color: ${docStyle.colors.contrastColor};
        font-size: ${docStyle.fontSize.medium};
      }
    }
  }
`;

export default LoginPageStyled;
