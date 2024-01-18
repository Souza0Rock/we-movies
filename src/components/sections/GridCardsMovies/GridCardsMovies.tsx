"use client";

import CardMovie from "@/components/common/CardMovie";
import Stack from "@/components/common/Stack";
import { useGlobalData } from "@/contexts/globalData";
import { getMovies } from "@/services/fetch/getMovies";
import React, { useCallback, useEffect, useState } from "react";

const GridCardsMovies: React.FC<{ data: TMovie[] }> = ({ data }) => {
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

  return (
    <Stack flexDirection="column" gap={1}>
      {teste.map((i) => (
        <CardMovie key={i.id} data={i} dispatchTrigger={dispatchTrigger} />
      ))}
    </Stack>
  );
};

export default GridCardsMovies;
