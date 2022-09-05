import styled from "styled-components";
import docStyle from "../../style/style";

const LargeButtonStyled = styled.button`
  width: 13.5rem;
  height: 4.3rem;
  font-size: ${docStyle.fontSize.medium};
  background-color: ${docStyle.colors.contrastColor};
  border-radius: ${docStyle.borderRadius.medium};
  color: ${docStyle.colors.primaryColor};
  font-family: ${docStyle.fontFamily.primaryFont};
  font-weight: ${docStyle.fontWeight.light};
  box-shadow: 0px 3px 8px grey;
  border: 0;
`;

export default LargeButtonStyled;
