import styled from "styled-components";
import docStyle from "../../style/style";

const HeaderStyled = styled.div`
  display: flex;
  margin: ${docStyle.margin.small};
  .header {
    &__image {
      @media (-widminth: ${docStyle.mediaBreakpoint.small}) {
        width: 242px;
        height: 96px;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        width: 550px;
        height: 210px;
      }
    }
  }
`;

export default HeaderStyled;
