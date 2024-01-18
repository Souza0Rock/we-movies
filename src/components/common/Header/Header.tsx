import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import ShoppingBag from "../../../../public/icons/ShoppingBag";
import { useGlobalData } from "@/contexts/globalData";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";

const Header: React.FC = () => {
  const { itemsInCart } = useGlobalData();
  const { push } = useRouter();

  const TextLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  `;

  return (
    <Stack
      px={0.625}
      py={1.125}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      <TextLink href="/">WeMovies</TextLink>
      {/* <Typography fontSize={20} fontWeight={700} onClick={}>
        WeMovies
      </Typography> */}
      <Stack
        gap={0.5}
        alignItems="center"
        flexDirection="row"
        onClick={() => push("/carrinho")}
      >
        <Typography color="#999">{itemsInCart} items</Typography>
        <ShoppingBag />
      </Stack>
    </Stack>
  );
};

export default Header;
