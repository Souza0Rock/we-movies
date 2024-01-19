"use client";

import React from "react";
import Stack from "../Stack";
import Image from "next/image";
import Typography from "../Typography";
import Button from "../Button";
import ShoppingCart from "../../../../public/icons/ShoppingCart";
import { formatPrice } from "@/utils/formatPrice";
import { Container } from "./CardMovie.styled";

const CardMovie: React.FC<{
  data: TMovie;
  addItemInCart: (data: TMovie, value: number) => void;
}> = ({ data, addItemInCart }) => {
  return (
    <Container
      gap={0.5}
      px={0.688}
      py={0.625}
      width="100%"
      maxWidth="21.5rem"
      alignItems="center"
      borderRadius={0.25}
      backgroundColor="#fff"
    >
      <Stack gap={0.438}>
        <Image src={data.image} alt={data.title} width={147} height={188} />
        <Stack gap={0.125} alignItems="center">
          <Typography color="#333333" fontWeight={700} fontSize={12}>
            {data.title}
          </Typography>
          <Typography color="#333333" fontWeight={700} fontSize={12}>
            R$ {formatPrice(data.price)}
          </Typography>
        </Stack>
      </Stack>

      <Button
        width="100%"
        onClick={() => addItemInCart(data, data.quantity_in_shopping_cart + 1)}
        backgrounColor={data.in_shopping_cart ? "#039B00" : "#009EDD"}
      >
        <Stack flexDirection="row" gap={0.75}>
          <Stack flexDirection="row" alignItems="flex-end" gap={0.213}>
            <ShoppingCart />
            <Typography fontSize={12} color="#fff">
              {data.quantity_in_shopping_cart}
            </Typography>
          </Stack>
          <Typography
            fontWeight={700}
            fontSize={12}
            textTransform="uppercase"
            color="#fff"
          >
            {data.in_shopping_cart
              ? "item adicionado"
              : "adicionar ao carrinho"}
          </Typography>
        </Stack>
      </Button>
    </Container>
  );
};

export default CardMovie;
