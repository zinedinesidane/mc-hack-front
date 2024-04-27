import { Box } from "@mui/material";
import styled from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoSendOutline } from "react-icons/io5";

const StyledLoggedInLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & > div {
    display: grid;
    grid-template-columns: 22rem 1fr;
    min-height: 100vh;
  }
`;

const StyledSidebar = styled.aside`
  height: 100%;
  border-right: 1px solid var(--color-grey-300);
  & ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 4rem;

    & a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;
const StyledMain = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;

  & > div {
    height: 100%;
    border-radius: 8px;
    background-color: white;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  & button {
    background: none;
    border: none;
    border-radius: 50%;
    &:first-of-type {
      height: 4rem;
      width: 4rem;
      & svg {
        height: 3rem;
        width: 3rem;
      }
    }
    &:last-of-type {
      height: 5rem;
      width: 5rem;
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.5rem;
  & svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: white;
    background-color: var(--color-primary);
  }
`;

function LoggedInLayout() {
  return (
    <StyledLoggedInLayout>
      <StyledHeader>
        <img src="/logo.png" alt="logo" />
        <Box display="flex" alignItems="center" gap="2rem" ml="auto">
          <button onClick={() => {}}>
            <IoMdNotificationsOutline />
          </button>
          <button>
            <img src="/default-user.jpg" />
          </button>
        </Box>
      </StyledHeader>
      <div>
        <StyledSidebar>
          <ul>
            <li>
              <StyledLink to="/customization">
                <PiTelevisionSimple />
                <span>Customization</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/workflow">
                <CiGrid41 />
                <span>Workflow</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/employers">
                <IoSendOutline />
                <span>Employers</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/profile">
                <LuUser2 />
                <span>Profile</span>
              </StyledLink>
            </li>
          </ul>
        </StyledSidebar>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </div>
    </StyledLoggedInLayout>
  );
}

export default LoggedInLayout;
