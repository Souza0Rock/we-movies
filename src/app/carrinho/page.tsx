import { getMovies } from "@/services/fetch/getMovies";
import Stack from "@/components/common/Stack";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import GridOrder from "@/components/sections/GridOrder";

export default function Cart() {
  return (
    <>
      {/* {data ? ( */}
      <GridOrder />
      {/* ) : (
        <Stack>
          <LoadingSpinner />
        </Stack>
      )} */}
    </>
  );
}
