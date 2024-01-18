import { getMovies } from "@/services/fetch/getMovies";
import Stack from "@/components/common/Stack";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import GridCardsMovies from "@/components/sections/GridCardsMovies";
import GridOrder from "@/components/sections/GridOrder";

export default async function Carrinho() {
  const data = await getMovies();

  return (
    <>
      {data ? (
        <GridOrder data={data} />
      ) : (
        <Stack>
          <LoadingSpinner />
        </Stack>
      )}
    </>
  );
}
