import { useCallback, useEffect, useState } from "react";
import { getMovies } from "@/services/fetch/getMovies";
import { useGlobalData } from "@/contexts/globalData";

interface UseMoviesResult {
  movies: TMovie[];
  itemsInCart: number;
  fetchMovies: () => void;
  dispatchTrigger: () => void;
}

const useMovies = (): UseMoviesResult => {
  const { setItemsInCart } = useGlobalData();

  const [movies, setMovies] = useState<TMovie[]>([]);
  const [trigger, setTrigger] = useState(false);

  const dispatchTrigger = () => setTrigger(!trigger);

  const fetchMovies = useCallback(async () => {
    const data = await getMovies();
    setMovies(data);

    const itemsInCart = data.filter((i) => i.in_shopping_cart).length;
    setItemsInCart(itemsInCart);
  }, [setItemsInCart]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, trigger]);

  return {
    movies,
    itemsInCart: movies.filter((i) => i.in_shopping_cart).length,
    fetchMovies,
    dispatchTrigger,
  };
};

export default useMovies;


// import { useCallback, useEffect, useState, useMemo } from "react";
// import { getMovies } from "@/services/fetch/getMovies";
// import { useGlobalData } from "@/contexts/globalData";

// interface UseMoviesOptions {
//   trigger?: boolean;
// }

// const useMovies = () => {
//   const { setItemsInCart } = useGlobalData();

//   const [triggerTeste, setTriggerTeste] = useState(true);
//   const [triggerCount, setTriggerCount] = useState(0);
//   const dispatchTriggerTeste = () => {
//     setTriggerTeste(!triggerTeste);
//     setTriggerCount(triggerCount + 1);
//   };

//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState<TMovie[]>([]);
//   const [moviesInCart, setMoviesInCart] = useState<TMovie[]>([]);

//   const fetchMovies = useCallback(async () => {
//     setLoading(true);

//     try {
//       const dataGeneric = await getMovies();
//       setMovies(dataGeneric);

//       const dataInCart = dataGeneric.filter((i) => i.in_shopping_cart);
//       setMoviesInCart(dataInCart);

//       setItemsInCart(dataInCart.length);

//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [setItemsInCart]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies, triggerCount]);

//   const memoizedValues = useMemo(
//     () => ({
//       dispatchTriggerTeste,
//       loading,
//       dataGeneric: movies,
//       itemsInCart: { data: moviesInCart, totalItems: moviesInCart.length },
//     }),
//     [dispatchTriggerTeste, loading, movies, moviesInCart]
//   );

//   return memoizedValues;
// };

// export default useMovies;


// import { useCallback, useEffect, useState, useMemo } from "react";
// import { getMovies } from "@/services/fetch/getMovies";
// import { useGlobalData } from "@/contexts/globalData";

// interface UseMoviesOptions {
//   trigger?: boolean;
// }

// const useMovies = () => {
//   const { setItemsInCart } = useGlobalData();

//   const [triggerTeste, setTriggerTeste] = useState(true);
//   const dispatchTriggerTeste = () => setTriggerTeste(!triggerTeste);

//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState<TMovie[]>([]);
//   const [moviesInCart, setMoviesInCart] = useState<TMovie[]>([]);

//   const fetchMovies = useCallback(async () => {
//     setLoading(true);

//     try {
//       const dataGeneric = await getMovies();
//       setMovies(dataGeneric);

//       const dataInCart = dataGeneric.filter((i) => i.in_shopping_cart);
//       setMoviesInCart(dataInCart);

//       setItemsInCart(dataInCart.length);

//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [setItemsInCart]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies, triggerTeste]);

//   const memoizedValues = useMemo(
//     () => ({
//       dispatchTriggerTeste,
//       loading,
//       dataGeneric: movies,
//       itemsInCart: { data: moviesInCart, totalItems: moviesInCart.length },
//     }),
//     [dispatchTriggerTeste, loading, movies, moviesInCart]
//   );

//   return memoizedValues;
// };

// export default useMovies;




// import { useCallback, useEffect, useState } from "react";
// import { getMovies } from "@/services/fetch/getMovies";
// import { useGlobalData } from "@/contexts/globalData";

// interface UseMoviesOptions {
//   trigger?: boolean;
// }

// const useMovies = () => {
//   const { setItemsInCart } = useGlobalData();

//   const [triggerTeste, setTriggerTeste] = useState(true);
//   const dispatchTriggerTeste = () => setTriggerTeste(!triggerTeste);

//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState<TMovie[]>([]);
//   const [moviesInCart, setMoviesInCart] = useState<TMovie[]>([]);

//   const fetchMovies = useCallback(async () => {
//     setLoading(true);

//     try {
//       const dataGeneric = await getMovies();
//       setMovies(dataGeneric);

//       const dataInCart = dataGeneric.filter((i) => i.in_shopping_cart);
//       setMoviesInCart(dataInCart);

//       setItemsInCart(dataInCart.length);

//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [setItemsInCart]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies, triggerTeste]);

//   return {
//     dispatchTriggerTeste,
//     loading,
//     dataGeneric: movies,
//     itemsInCart: { data: moviesInCart, totalItems: moviesInCart.length },
//   };
// };

// export default useMovies;