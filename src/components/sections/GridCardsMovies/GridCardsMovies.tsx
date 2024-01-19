"use client";

import React from "react";
import useMovies from "@/hooks/useMovies";
import Stack from "@/components/common/Stack";
import CardMovie from "@/components/common/CardMovie";

const GridCardsMovies: React.FC = () => {
  const { data, dispatchTrigger } = useMovies();

  return (
    <Stack flexDirection="column" gap={1}>
      {data.movies.map((i) => (
        <CardMovie key={i.id} data={i} dispatchTrigger={dispatchTrigger} />
      ))}
    </Stack>
  );
};

export default GridCardsMovies;
