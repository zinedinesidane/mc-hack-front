import { Box, Checkbox } from "@mui/material";

import styled from "styled-components";
import Heading from "../ui/Heading";
import { useState } from "react";

const defaultColors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#f0f0f0",
  "#0f0f0f",
  "#f00f00",
  "#0ff00f",
  "#00f00f",
  "#f0f00f",
  "#0f0f0f",
  "#f00f00",
  "#0ff00f",
  "#00f00f",
  "#f0f00f",
  "#0f0f0f",
];

const StyledCustomization = styled.div`
  padding: 3.5rem 3rem;

  & label {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
  }
  & input {
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-300);
    padding: 0.8rem 1.2rem;
    &::placeholder {
      color: var(--color-grey-400);
      font-size: 1.2rem;
    }
  }
`;

const StyledBox = styled.div`
  padding: 8rem 3rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);

  & ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    justify-items: center;

    & li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;

      & input {
        width: 20px;
        height: 24px;
        border: none;
        padding: 0;
      }
    }
  }
`;

function Customization() {
  const [colors, setColors] = useState(defaultColors);
  const [groupes, setGroupes] = useState([]);

  const handleGroupesKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setGroupes((prevGroupes) => [...prevGroupes, e.target.value]);
      e.target.value = "";
    }
  };

  const handleColorChange = (index) => (e) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
  };

  return (
    <StyledCustomization>
      <Box display="flex" flexDirection="column" gap="1rem">
        <label htmlFor="groupes">My Groupes</label>
        <input onKeyDown={handleGroupesKeyDown} type="groupes" id="groupes" name="groupes"></input>

        {groupes.map((groupe, index) => (
          <span key={index} className="tag">
            {groupe}
          </span>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" gap="1rem" mt="3rem">
        <Heading as="h2">Groupes Customization</Heading>
        <StyledBox>
          <ul>
            {colors.map((color, index) => (
              <li key={index}>
                <input type="color" value={color} onChange={handleColorChange(index)} />
                <span>Product Development</span>
              </li>
            ))}
          </ul>
        </StyledBox>
        <StyledBox style={{ padding: "3rem", marginTop: "2rem" }}>
          <Heading as="h2">Notifications</Heading>
          <ul style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <li>
              <Checkbox />
              <span>Email</span>
            </li>
            <li>
              <Checkbox />
              <span>SMS</span>
            </li>
            <li>
              <Checkbox />
              <span>Application</span>
            </li>
          </ul>
        </StyledBox>
      </Box>
    </StyledCustomization>
  );
}

export default Customization;
