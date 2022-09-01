import styled from "styled-components";
import docStyle from "../../style/style";

const HeaderStyled = styled.div`
  display: flex;
  margin: ${docStyle.margin.small};
  .header {
    &__image {
      width: 70%;
    }
  }
`;

export default HeaderStyled;
