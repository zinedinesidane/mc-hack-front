import styled from "styled-components";
import Heading from "../ui/Heading";
import { Box, Checkbox } from "@mui/material";
import Button from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { registerUser } from "../api/authentification";

const StyledSignup = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1.6fr;
  background-color: #f6f6ff;
  column-gap: 4rem;
  padding-right: 6rem;
  margin: 5rem auto;
  max-width: 75%;
  align-items: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  justify-content: center;
`;

const FormBody = styled.div`
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
  position: relative;
  &,
  & > img {
    height: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: white;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    & h4 {
      margin-bottom: 0;
    }
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

function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmitFn = (data) => {
    console.log("data", data);
    registerUser(data).then((res) => console.log(res));
  };
  return (
    <StyledSignup>
      <StyledBox>
        <img src="/signupImg.png" alt="Signup img" />
        <div>
          <Heading size="h4">Welcome Amoung Us</Heading>
          <p>Wedoc are happy that you are joinning us</p>
        </div>
      </StyledBox>
      <StyledForm onSubmit={handleSubmit(onSubmitFn)}>
        <Box display="flex" alignItems="center" gap="1rem">
          <Heading style={{ marginBottom: "3rem" }} size="h2">
            Sign up to <span style={{ color: "#2500BB" }}>Wedoc</span>{" "}
          </Heading>
          {/* <img src="/logoPatterns.png" alt="Logo" /> */}
        </Box>
        <FormBody>
          <Box display="flex" alignItems="center" gap="3rem">
            <FormGroup>
              <label htmlFor="accName">Account Name</label>
              <input {...register("accName")} placeholder="Enter your name" type="text" id="accName" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="companyName">Company Name</label>
              <input {...register("companyName")} placeholder="Enter your company name" type="text" id="companyName" />
            </FormGroup>
          </Box>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input {...register("email")} placeholder="Enter your email adress" type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <input {...register("password")} placeholder="Enter your password" type="password" id="password" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input {...register("confirmpassword")} placeholder="Confirm your password" type="password" id="password" />
          </FormGroup>
          <Box display="flex" alignItems="center" gap=".6rem">
            <Checkbox />
            <span>Keep me sign up</span>
          </Box>
          <StyledButtonGroup>
            <Button size="large">Sign up</Button>
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
            <span>Have an account ?</span>
            <StyledLink to="/login">Log in</StyledLink>
          </Box>
        </FormBody>
      </StyledForm>
    </StyledSignup>
  );
}

export default Signup;
