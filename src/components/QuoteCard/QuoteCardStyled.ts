import styled from "styled-components";
import docStyle from "../../style/style";

const QuoteCardStyled = styled.div`
  background-color: ${docStyle.colors.secondaryColor};
  padding: ${docStyle.padding.medium};
  display: flex;
  flex-direction: column;
  border-radius: ${docStyle.borderRadius.medium};
  .card {
    &__text {
      font-size: ${docStyle.fontSize.medium};
      text-align: end;
    }
    &__author {
      font-size: ${docStyle.fontSize.small};
      font-size: 24px;
      margin-top: 23px;
    }
    &__image {
      width: auto;
      overflow: hidden;
      border-radius: 50%;
      object-fit: cover;
      height: 150px;
      width: 150px;
      &-container {
        width: 150px px;
        height: 150px;
        display: flex;
        align-self: flex-end;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
    &__buttons-img-container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export default QuoteCardStyled;
