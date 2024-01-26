import GridCardsMovies from "@/components/sections/GridCardsMovies";
import { getMovies } from "@/services/fetch/getMovies";

export default async function Home() {
  const data = await getMovies();

  return <GridCardsMovies dataMovies={data} />;
}
