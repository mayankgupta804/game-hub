import useData from "./useData";

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: string;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => useData<FetchGenresResponse>("/genres");

export default useGenres;
