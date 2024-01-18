import React from "react";
import Stack from "../Stack";
import AddCount from "../../../../public/icons/AddCount";
import RemoveCount from "../../../../public/icons/RemoveCount";
import { CountButton } from "./Counter.styled";

const Counter: React.FC<{
  value: number;
  handleChange: (e: number) => void;
}> = ({ value = 1, handleChange }) => {
  return (
    <Stack
      gap={0.688}
      width="51%"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      <CountButton onClick={() => value !== 1 && handleChange(value - 1)}>
        <RemoveCount />
      </CountButton>
      <Stack
        px={0.75}
        width="100%"
        maxWidth="3.875rem"
        borderRadius={0.25}
        border="1px solid #D9D9D9"
      >
        {value}
      </Stack>
      <CountButton onClick={() => handleChange(value + 1)}>
        <AddCount />
      </CountButton>
    </Stack>
  );
};

export default Counter;
