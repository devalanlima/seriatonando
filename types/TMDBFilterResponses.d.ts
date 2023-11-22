declare global {
  interface CertificationsRegionContent {
    "certification": string;
    "meaning": string;
    "order": number;
  }
  interface CertificationsRegion {
    [key: string]: Array<CertificationsRegionContent>;
  }
  interface Certifications {
    "certifications": CertificationsRegion;
  }



  interface DisplayPriorities {
    [key: string]: number;
  }
  interface Provider {
    "display_priorities": DisplayPriorities;
    "display_priority": number;
    "logo_path": string;
    "provider_id": number;
    "provider_name": string;
  }
  interface StreamingProviders {
    "results": Array<Provider>;
  }



  interface WatchProvidersRegionContent {
    "logo_path": string;
    "provider_id": number;
    "provider_name": string;
    "display_priority": number;
  }
  interface WatchProvidersResults {
    [key: string]: {
      "link": string;
      "flatrate"?: Array<WatchProvidersRegionContent>;
      "buy"?: Array<WatchProvidersRegionContent>;
      "rent"?: Array<WatchProvidersRegionContent>;
    }
  }
  interface WatchProviders {
    "id": number;
    "results": WatchProvidersResults;
  }



  interface Genre {
    "id": number;
    "name": string;
  }
  interface Genres {
    "genres": Array<Genre>;
  }



  interface MovieShow {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface TvShow {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: Array<number>;
    id: number;
    name: string;
    origin_country: Array<string>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }

  interface Discover {
    page: number;
    results: Array<MovieShow> | Array<TvShow>;
    total_pages: number;
    total_results: number
  }
}
export { };

