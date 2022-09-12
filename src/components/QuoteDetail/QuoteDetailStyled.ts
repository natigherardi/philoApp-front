import styled from "styled-components";
import docStyle from "../../style/style";

const QuoteDetailStyled = styled.div`
  background-color: ${docStyle.colors.secondaryColor};
  padding: ${docStyle.padding.large};
  display: flex;
  flex-direction: column;
  border-radius: ${docStyle.borderRadius.medium};
  align-items: center;
  gap: 24px;
  .quote-detail {
    &__text {
      font-size: ${docStyle.fontSize.medium};
      text-align: start;
    }
    &__author {
      font-size: ${docStyle.fontSize.xs};
      align-self: end;
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
        border-radius: 50%;
      }
    }
    &__group {
      list-style: none;
      padding: 0;
      &-container {
        background-color: ${docStyle.colors.primaryColor};
        border-radius: ${docStyle.borderRadius.medium};
        padding: ${docStyle.padding.medium};
        box-shadow: 0px 3px 8px grey;
        font-size: ${docStyle.fontSize.small};
      }
    }
    &__item {
      margin: 10px 0;
    }
    &__link {
      color: inherit;
    }
  }
`;
export default QuoteDetailStyled;
