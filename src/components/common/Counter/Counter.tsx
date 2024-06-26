import React from "react";
import Stack from "../Stack";
import AddCount from "../../../../public/icons/AddCount";
import RemoveCount from "../../../../public/icons/RemoveCount";
import { CountButton, InputNumber } from "./Counter.styled";

const Counter: React.FC<{
  value: number;
  handleChange: (e: number) => void;
}> = ({ value = 1, handleChange }) => {
  return (
    <Stack
      gap={0.688}
      width="51%"
      maxWidth="7.5rem"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      <CountButton onClick={() => value !== 1 && handleChange(value - 1)}>
        <RemoveCount />
      </CountButton>

      <InputNumber type="number" value={value} readOnly />

      <CountButton onClick={() => handleChange(value + 1)}>
        <AddCount />
      </CountButton>
    </Stack>
  );
};

export default Counter;
