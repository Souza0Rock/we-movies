import { localInstance } from "../connectApi";

export const putMovie = async (dataMovie: Partial<TMovie>) => {
  const { id, ...payload } = dataMovie;

  try {
    const { data } = await localInstance.put(`/products/${id}`, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
