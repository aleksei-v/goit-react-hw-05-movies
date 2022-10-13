import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
   
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    text-decoration: none;
    border-radius: ${p => p.theme.radii.normal};
    border: none;
    cursor: pointer;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    transition: color 250ms linear, 
    scale 250ms linear;
    :hover {
        color: ${p => p.theme.colors.accent};
        scale: 1.1;
    }

`

export const NavItem = styled(NavLink)`
  display: block;
  width: 100px;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
   &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

`;