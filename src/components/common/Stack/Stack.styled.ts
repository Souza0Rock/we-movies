import { calcSpace } from "@/utils/calcSpace";
import styled, { css } from "styled-components";

export const Container = styled.div<IStyleGlobal>`
  display: flex;

  ${({
    flexDirection = "column",
    m,
    mt,
    mb,
    ml,
    mr,
    my,
    mx,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    width,
    height,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    gap,
    alignItems = "stretch",
    justifyContent = "flex-start",
    flexWrap = "nowrap",
    alignSelf = "auto",
    backgroundColor = "transparent",
    borderRadius = 0,
    cursorPointer = false,
  }) => css`
    flex-direction: ${flexDirection};
    gap: ${calcSpace(gap)};
    margin-top: ${calcSpace(mt || my || m)};
    margin-bottom: ${calcSpace(mb || my || m)};
    margin-left: ${calcSpace(ml || mx || m)};
    margin-right: ${calcSpace(mr || mx || m)};

    padding-top: ${calcSpace(pt || py || p)};
    padding-bottom: ${calcSpace(pb || py || p)};
    padding-left: ${calcSpace(pl || px || p)};
    padding-right: ${calcSpace(pr || px || p)};

    border-radius: ${calcSpace(borderRadius)};

    max-width: ${maxWidth};
    min-width: ${minWidth};

    max-height: ${maxHeight};
    min-height: ${minHeight};

    width: ${width};
    height: ${height};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};
    align-self: ${alignSelf};

    background-color: ${backgroundColor};
    cursor: ${cursorPointer ? "pointer" : "default"};
  `}
`;
