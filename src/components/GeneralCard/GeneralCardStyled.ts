import styled from "styled-components";
import docStyle from "../../style/style";

const GeneralCardStyled = styled.div`
  background-color: ${docStyle.colors.secondaryColor};
  padding: ${docStyle.padding.medium};
  display: flex;
  flex-direction: column;
  border-radius: ${docStyle.borderRadius.medium};
  gap: 20px;
  .card {
    &__text {
      font-size: ${docStyle.fontSize.medium};
      text-align: end;
    }
    &__author {
      font-size: ${docStyle.fontSize.small};
    }
    &__image {
      width: 165px;
      height: 150px;
      overflow: hidden;
      border-radius: ${docStyle.borderRadius.large};
      align-self: end;
    }
  }
`;

export default GeneralCardStyled;
