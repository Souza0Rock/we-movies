import styled, { css } from "styled-components";
import { calcSpace } from "@/utils/calcSpace";

export const Text = styled.span<ITypographProps>`
  ${({ textAlign = "left" }) => css`
    text-align: ${textAlign};
  `}

  font-size: ${({ fontSize }) => fontSize}px;
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "auto")};
  line-height: ${({ lineHeigth = "normal" }) => calcSpace(lineHeigth)};
  font-style: ${({ italic = false }) => (italic ? "italic" : "normal")};
  color: ${({ color }) => color};
`;
