import useData from "./useData";

export interface FetchPlatformsResponse {
  count: number;
  results: Platforms[];
}

export interface Platforms {
  platforms: Platform[];
}

export interface Platform {
  id: string;
  name: string;
  slug: string;
}


const usePlatforms = () => useData<FetchPlatformsResponse>('/platforms/lists/parents');

export default usePlatforms;
