import styled from "styled-components";
import docStyle from "../../style/style";

const SmallButtonStyled = styled.button`
  border-radius: ${docStyle.borderRadius.large};
  background-color: ${docStyle.colors.contrastColor};
  width: 60px;
  height: 60px;
  box-shadow: 0px 3px 5px grey;
  border: 0;
  font-size: 30px;
  color: ${docStyle.colors.TypographyColor};
  :hover {
    background-color: ${docStyle.colors.contrastColorLighter};
    cursor: pointer;
  }
`;

export default SmallButtonStyled;
