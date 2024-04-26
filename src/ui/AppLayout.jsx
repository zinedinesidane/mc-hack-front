import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  /* width: 100%; */
  /* background: yellow; */
  padding-inline: 9.6rem;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  height: 100%;
  padding-block: 4rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <AppBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
