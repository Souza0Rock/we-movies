import styled, { css } from "styled-components";
import { calcSpace } from "@/utils/calcSpace";

export const Text = styled.span<ITypographProps>`
  ${({
    fontSize,
    textTransform,
    fontWeight,
    cursorPointer,
    lineHeigth,
    italic,
    color,
    textAlign,
  }) => css`
    font-size: ${fontSize}px;
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    cursor: ${cursorPointer ? "pointer" : "auto"};
    line-height: ${calcSpace(lineHeigth)};
    font-style: ${italic ? "italic" : "normal"};
    color: ${color};
    text-align: ${textAlign};
  `}
`;
