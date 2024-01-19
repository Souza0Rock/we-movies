"use client";

import React from "react";
import Stack from "../Stack";
import Image from "next/image";
import Typography from "../Typography";
import Button from "../Button";
import ShoppingCart from "../../../../public/icons/ShoppingCart";
import { putMovie } from "@/services/fetch/putMovie";
import { formatPrice } from "@/utils/formatPrice";

const CardMovie: React.FC<{ data: TMovie; dispatchTrigger: () => void }> = ({
  data,
  dispatchTrigger,
}) => {
  const teste = async () => {
    const { quantity_in_shopping_cart, ...resto } = data;

    const payload = {
      ...resto,
      quantity_in_shopping_cart: quantity_in_shopping_cart + 1,
      in_shopping_cart: true,
    };

    try {
      putMovie(payload);
      dispatchTrigger();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      gap={0.5}
      px={0.688}
      py={0.625}
      borderRadius={0.25}
      alignItems="center"
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
        onClick={teste}
        backgrounColor={data.in_shopping_cart ? "#039B00" : "#009EDD"}
      >
        <Stack flexDirection="row" gap={0.75}>
          <Stack flexDirection="row" alignItems="flex-end" gap={0.213}>
            <ShoppingCart />
            <Typography fontSize={12}>
              {data.quantity_in_shopping_cart}
            </Typography>
          </Stack>
          <Typography fontWeight={700} fontSize={12} textTransform="uppercase">
            {data.in_shopping_cart
              ? "item adicionado"
              : "adicionar ao carrinho"}
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

export default CardMovie;
