import { GameQuery } from "../App";
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
  rating_top: number;
}


export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => useData<FetchGamesResponse>("/games",
  { params:
    {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  },
  [gameQuery]);

export default useGames;
