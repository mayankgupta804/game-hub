import platforms from "../data/platforms";

export interface Platforms {
  platforms: Platform[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


const usePlatforms = () => ({data: platforms, error: null, isLoading: false});

export default usePlatforms;
