import useData from "./useData";

export interface Platform {
  id: string;
  slug: string;
  name: string;
}

export interface Platforms {
  platform: Platform;
}

export interface Game {
  id: string;
  slug: string;
  background_image: string;
  name: string;
  platforms: Platforms[];
  metacritic: number;
}


export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => useData<FetchGamesResponse>("/games");

export default useGames;
