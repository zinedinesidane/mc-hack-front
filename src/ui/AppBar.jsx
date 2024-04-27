import styled from "styled-components";
import Button from "./Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

const StyledHeader = styled.header`
  width: 100%;
  padding-inline: 9.6rem;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;
const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
  height: 8rem;

  & ul {
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 5rem;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  &:nth-of-type(2),
  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;

function AppBar() {
  return (
    <StyledHeader>
      <StyledNavBar>
        <img style={{ marginBottom: "8px" }} src="/logo.png" alt="logo" />
        <ul>
          <StyledLink to="/">
            <span>Solutions</span>
            <FaChevronDown />
          </StyledLink>
          <StyledLink to="/">
            <span>Entreprise</span>
            <FaChevronDown />
          </StyledLink>
          <StyledLink to="/">
            <span>About us</span>
          </StyledLink>
          <StyledLink to="/">
            <span>Pricing</span>
          </StyledLink>
        </ul>
        <Box display="flex" alignItems="center" gap="1rem">
          <Button variation="secondary" size="large">
            <Link to="/login">Log in</Link>
          </Button>
        </Box>
      </StyledNavBar>
    </StyledHeader>
  );
}

export default AppBar;
