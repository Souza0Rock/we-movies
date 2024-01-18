"use client";

import OrderItem from "@/components/common/OrderItem";
import Stack from "@/components/common/Stack";
import { useGlobalData } from "@/contexts/globalData";
import { getMovies } from "@/services/fetch/getMovies";
import React, { useCallback, useEffect, useState } from "react";

// import { Container } from './styles';

const GridOrder: React.FC<{ data: TMovie[] }> = ({ data }) => {
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

  return (
    <Stack p={1} gap={1} borderRadius={0.25} backgroundColor="#fff">
      {tratando.map((i) => (
        <OrderItem key={i.id} data={i} dispatchTrigger={dispatchTrigger} />
      ))}
    </Stack>
  );
};

export default GridOrder;
