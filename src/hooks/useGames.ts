import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<FetchGamesResponse>("/games",
  { params:
    {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id
    }
  },
  [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;
