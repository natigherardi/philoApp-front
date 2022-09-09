import styled from "styled-components";
import docStyle from "../../style/style";

const QuotesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 30px;
  .quotes-page__title {
    font-weight: ${docStyle.fontWeight.bold};
    margin: ${docStyle.margin.small};
  }
`;

export default QuotesListStyled;
