import styled from "styled-components";
import Button from "./Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

const StyledHeader = styled.header`
  padding-block: 1rem;
  width: 100%;
`;
const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
  padding-block: 1rem;

  & ul {
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  /* &:hover {
    text-decoration: underline;
  } */
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
          <Button size="large">
            <Link to="/signup">Sign up</Link>
          </Button>
        </Box>
      </StyledNavBar>
    </StyledHeader>
  );
}

export default AppBar;
