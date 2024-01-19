import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import ShoppingBag from "../../../../public/icons/ShoppingBag";
import { useGlobalData } from "@/contexts/globalData";
import { useRouter } from "next/navigation";
import { Container, TextLink } from "./Header.styled";

const Header: React.FC = () => {
  const { push } = useRouter();
  const { itemsInCart } = useGlobalData();

  return (
    <Container
      px={0.625}
      py={1.125}
      width="100%"
      position="fixed"
      alignItems="center"
      flexDirection="row"
      backgroundColor="#2F2E41"
      justifyContent="space-between"
    >
      <TextLink href="/">WeMovies</TextLink>
      <Stack
        gap={0.5}
        alignItems="center"
        flexDirection="row"
        onClick={() => push("/carrinho")}
      >
        <Stack alignItems="flex-end">
          <Typography color="#fff" fontWeight={600} className="text-my-cart">
            Meu Carrinho
          </Typography>
          <Typography color="#999" fontWeight={600}>
            {itemsInCart} itens
          </Typography>
        </Stack>
        <ShoppingBag />
      </Stack>
    </Container>
  );
};

export default Header;
