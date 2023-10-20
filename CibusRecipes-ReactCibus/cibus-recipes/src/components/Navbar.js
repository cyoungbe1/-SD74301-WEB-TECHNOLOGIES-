import React from "react";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Home">
            <h1> Cibus Recipes</h1>
          </NavLink>
          <NavLink to="/RecipeDetail" activeStyle>
            Recipe
          </NavLink>
          <NavLink to="/MenuPlanner" activeStyle>
            Menu Planner
          </NavLink>

          <NavLink to="/RecipeList" activeStyle>
            Recipe List
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
