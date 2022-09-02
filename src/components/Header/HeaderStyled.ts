import styled from "styled-components";
import docStyle from "../../style/style";

const HeaderStyled = styled.div`
  display: flex;
  margin: ${docStyle.margin.small};
  .header {
    &__image {
      @media (min-width: ${docStyle.mediaBreakpoint.small}) {
        width: 312px;
        height: 120px;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.medium}) {
        width: 400px;
        height: 150px;
      }
      @media (min-width: ${docStyle.mediaBreakpoint.big}) {
        width: 550px;
        height: 210px;
      }
    }
  }
`;

export default HeaderStyled;
