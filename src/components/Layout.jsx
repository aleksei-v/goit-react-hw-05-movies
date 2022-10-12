import { Box } from "./Box";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled(NavLink)`
  display: flex;
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
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const Layout = () => {
    return (<Box>
        <Box as="header" p={4} pl={7} borderRight="1px solid black">
            <Box as="nav" display="flex" gridGap={6}>
                <NavItem to="home">Home</NavItem>
                <NavItem to="movies">Movies</NavItem>
            </Box>
        </Box>
        <Outlet />
    </Box>)
};