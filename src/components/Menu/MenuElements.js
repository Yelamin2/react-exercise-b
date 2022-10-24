import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #c1f0ba;
height: 65px;
display: flex;
justify-content: space-around;
margin-bottom: 30px;
`;


export const NavLink = styled(Link)`
color: #f00000;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 0 1rem;
  
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d0dff;
  }

`;

export const NavMenu = styled.div`
display: flex;
width:90%;
justify-content: space-around;
align-items: center;

`;
