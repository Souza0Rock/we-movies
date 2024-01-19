import styled from "styled-components";
import Stack from "@/components/common/Stack";

export const Container = styled(Stack)`
  @media (min-width: 768px) {
    br {
      display: none;
    }
  }
`;
