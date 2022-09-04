import docStyle from "../../style/style";
import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${docStyle.colors.primaryColor};
  position: fixed;
  gap: 0.3em;
  top: 50%;
  padding: 0.3em;
  transform: translate(-56%, -50%);
  box-shadow: 0px 0px 0px 1.5px ${docStyle.colors.contrastColorLighter};
  @media (min-width: ${docStyle.mediaBreakpoint.small}) {
    left: 54.5%;
    font-size: ${docStyle.fontSize.medium};
    height: 6em;
    width: 12em;
  }
  @media (min-width: ${docStyle.mediaBreakpoint.big}) {
    left: 50%;
    font-size: ${docStyle.fontSize.large};
    height: 370px;
    width: 600px;
  }
  .modal {
    &__title {
      color: ${docStyle.colors.contrastColor};
    }
    &__description {
      font-size: 0.7em;
    }
  }
`;

export default ModalStyled;
