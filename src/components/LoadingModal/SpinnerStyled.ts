import styled, { keyframes } from "styled-components";
import docStyle from "../../style/style";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  border-radius: 50%;
  border-radius: 50%;

  width: 90px;
  height: 90px;

  @media (min-width: ${docStyle.mediaBreakpoint.big}) {
    width: 240px;
    height: 240px;
  }
`;

export const LoadingContainer = styled.div`
  z-index: 1;
  color: ${docStyle.colors.primaryColor};
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;

  .loading {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    &__description {
      color: ${docStyle.colors.TypographyColor};
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        font-size: ${docStyle.fontSize.medium};
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        font-size: ${docStyle.fontSize.large};
      }
    }
  }
`;
