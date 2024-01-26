import GridOrder from "@/components/sections/GridOrder";
import { getMovies } from "@/services/fetch/getMovies";

export default async function Cart() {
  const data = await getMovies();

  return <GridOrder dataMovies={data} />;
}
