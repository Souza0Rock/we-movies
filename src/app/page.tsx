import { getMovies } from "@/services/fetch/getMovies";
import Stack from "@/components/common/Stack";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import GridCardsMovies from "@/components/sections/GridCardsMovies";

export default async function Home() {
  const data = await getMovies();

  return (
    <>
      {/* {data ? ( */}
        <GridCardsMovies data={data} />
      {/* // ) : (
      //   <Stack>
      //     <LoadingSpinner />
      //   </Stack>
      // )} */}
    </>
  );
}
