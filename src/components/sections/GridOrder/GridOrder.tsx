"use client";

import React from "react";
import useMovies from "@/hooks/useMovies";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/formatPrice";
import Stack from "@/components/common/Stack";
import Button from "@/components/common/Button";
import OrderItem from "@/components/common/OrderItem";
import Typography from "@/components/common/Typography";

const GridOrder: React.FC = () => {
  const { push } = useRouter();
  const { data, dispatchTrigger, removeItem } = useMovies();

  return (
    <Stack p={1} gap={1.375} borderRadius={0.25} backgroundColor="#fff">
      {data.moviesInCart.map((i) => (
        <OrderItem
          key={i.id}
          data={i}
          removeItem={removeItem}
          dispatchTrigger={dispatchTrigger}
        />
      ))}

      <Stack borderTop="1px solid #999" pt={1.313} gap={1}>
        <Stack
          px={1}
          gap={2}
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Typography color="#999" fontWeight={700} textTransform="uppercase">
            Total
          </Typography>
          <Typography fontSize={24} fontWeight={700}>
            R$ {formatPrice(data.priceTotalCart)}
          </Typography>
        </Stack>
        <Button onClick={() => push("/finalizar-compra")}>
          <Typography color="#fff" textTransform="uppercase" fontWeight={700}>
            finalizar pedido
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default GridOrder;
