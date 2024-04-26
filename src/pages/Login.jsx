import styled from "styled-components";
import Heading from "../ui/Heading";
import { Box, Checkbox } from "@mui/material";
import Button from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const StyledSignup = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1.4fr;
  background-color: #f6f6ff;
  column-gap: 4rem;
  padding-left: 6rem;
  align-items: center;
  max-width: 80%;
  margin-inline: auto;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 1rem;
  height: 100%;
  justify-content: center;
`;

const FormBody = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & label {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000;
  }
  & input {
    background: white;
    border: none;
    padding: 0.5rem 1rem;

    &::placeholder {
      color: var(--color-grey-400);
      font-size: 1.2rem;
    }
  }
`;

const StyledBox = styled.div`
  justify-self: end;
  &,
  & > img {
    height: 100%;
  }
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-top: 1rem;
  gap: 0.4rem;
  & button:last-child {
    color: #000;
  }
  & span {
    align-self: center;
    color: var(--color-grey-400);
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: underline;
`;

function Login() {
  return (
    <StyledSignup>
      <StyledForm>
        <Box display="flex" alignItems="center" alignSelf="center" gap="1rem">
          <Heading style={{ marginBottom: "3rem" }} size="h2">
            Sign in to <span style={{ color: "#2500BB" }}>Wedoc</span>{" "}
          </Heading>
        </Box>
        <FormBody>
          <FormGroup>
            <label htmlFor="accName">Account Name</label>
            <input placeholder="Enter your name" type="text" id="accName" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter your password" type="password" id="password" />
          </FormGroup>
          <Box display="flex" alignItems="center" gap=".6rem">
            <Checkbox />
            <span>Keep me sign up</span>
          </Box>
          <StyledButtonGroup>
            <Button size="large">Log in</Button>
            <span>or</span>
            <Button
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: ".8rem",
              }}
              variation="secondary"
              size="large"
            >
              <FcGoogle />
              <span style={{ color: "#000" }}>Sign up with Google</span>
            </Button>
          </StyledButtonGroup>
          <Box display="flex" alignItems="center" gap=".8rem" mt="1rem">
            <span>{`Don't have an account ?`}</span>
            <StyledLink to="/sign">Sign in</StyledLink>
          </Box>
        </FormBody>
      </StyledForm>
      <StyledBox>
        <img src="/loginImg.png" alt="Login img" />
      </StyledBox>
    </StyledSignup>
  );
}

export default Login;
