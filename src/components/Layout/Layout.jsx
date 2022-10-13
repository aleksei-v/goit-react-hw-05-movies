import { Suspense } from "react";
import { Box } from "../Box";
import { Outlet } from "react-router-dom";
import { NavItem } from "./Layout.styled";

const Layout = () =>
  (<Box>
    <Box as="header" p={4} pl={7} borderRight="1px solid black">
      <Box as="nav" display="flex" gridGap={6}>
        <NavItem to="home">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Box>
  </Box>
  
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
</Box>);
  
export default Layout;