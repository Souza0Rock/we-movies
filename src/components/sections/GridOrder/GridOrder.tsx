"use client";

import Button from "@/components/common/Button";
import OrderItem from "@/components/common/OrderItem";
import Stack from "@/components/common/Stack";
import Typography from "@/components/common/Typography";
import { useGlobalData } from "@/contexts/globalData";
import { getMovies } from "@/services/fetch/getMovies";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

// import { Container } from './styles';

const GridOrder: React.FC<{ data: TMovie[] }> = ({ data }) => {
  const { push } = useRouter();

  const { setItemsInCart } = useGlobalData();

  const [teste, setTeste] = useState(data);

  const [trigger, setTrigger] = useState(false);
  const dispatchTrigger = () => setTrigger(!trigger);

  const fetchMovies = useCallback(async () => {
    const data = await getMovies();

    setTeste(data);

    const abacaxi = data.filter((i) => i.in_shopping_cart).length;

    setItemsInCart(abacaxi);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, trigger]);

  const tratando = teste.filter((i) => i.in_shopping_cart);

  const subtotalGeral = tratando.reduce(
    (total, objeto) => total + objeto.price * objeto.quantity_in_shopping_cart,
    0
  );

  return (
    <Stack p={1} gap={1.375} borderRadius={0.25} backgroundColor="#fff">
      {tratando.map((i) => (
        <OrderItem key={i.id} data={i} dispatchTrigger={dispatchTrigger} />
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
            R$ {formatPrice(subtotalGeral)}
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
