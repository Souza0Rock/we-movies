"use client";

import React from "react";
import useMovies from "@/hooks/useMovies";
import Stack from "@/components/common/Stack";
import CardMovie from "@/components/common/CardMovie";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const GridCardsMovies: React.FC = () => {
  const { data, addItemInCart, loading } = useMovies();

  return loading ? (
    <LoadingSpinner />
  ) : (
    <Stack flexDirection="row" justifyContent="center" flexWrap="wrap" gap={1}>
      {data.movies.map((i) => (
        <CardMovie key={i.id} data={i} addItemInCart={addItemInCart} />
      ))}
    </Stack>
  );
};

export default GridCardsMovies;
