
import styled from "styled-components";

export const ContainerMaster = styled.div`
height: auto;
width: auto;
background: transparent;
`

export const Layout01 = styled.div`
  height: auto;
  width: auto;
  background-size: cover;
  background-position: center;
  text-align: center;
  margin: 0;
  background-color: ${(props) => props.theme.COLORS.gray100};
  box-sizing: border-box;
`;

export const Layout02 = styled.div`
  height: auto;
  width: 98vw;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.gray100};
  background-color: ${(props) => props.theme.COLORS.gray100};
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

