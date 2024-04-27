import styled from "styled-components";
import Heading from "../ui/Heading";
import { Box } from "@mui/material";

const StyledForm = styled.form`
  margin-top: 4rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 40rem;
  align-items: center;
  text-align: center;
  background-color: var(--color-grey-0);
  padding-bottom: 3rem;

  & h2 {
    margin-top: 2rem;
  }
  & > div {
    &:first-of-type {
      width: 100%;
    }
    &:last-of-type {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  & button {
    width: 100%;
    &:last-child {
      color: #000;
    }
  }
`;

function WaitConfirm() {
  return (
    <StyledForm>
      <div>
        <img src="/confirmImg.png" alt="banner" />
      </div>
      <Box>
        <Heading as="h2">{`Wait the confirmation from your company's admin`}</Heading>
        <p>Wait until you get your confirmation</p>
      </Box>
    </StyledForm>
  );
}

export default WaitConfirm;
