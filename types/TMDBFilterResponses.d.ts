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
      "ads"?: Array<WatchProvidersRegionContent>;
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


  interface MovieId {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | any;
    budget: number;
    genres: Array<{ id: number; name: string }>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }>;
    production_countries: Array<{ iso_3166_1: string; name: string }>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{ english_name: string; iso_639_1: string; name: string }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    "watch/providers": { results: WatchProvidersResults };
    release_dates: {
      results: Array<{
        iso_3166_1: string;
        release_dates: Array<{
          certification: string;
          descriptors: Array<string>;
          iso_639_1: string;
          note: string;
          release_date: string;
          type: number;
        }>;
      }>;
    };
    credits: {
      cast: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
      }>;
      crew: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        credit_id: string;
        department: string;
        job: string;
      }>;
    };
    videos: {
      results: Array<{
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }>
    }
  }

  interface TVId {
    adult: boolean;
    "watch/providers": { results: WatchProvidersResults };
    videos: {
      results: Array<{
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }>
    };
    content_ratings: {
      results: Array<{
        descriptos: Array<string>;
        iso_3166_1: string;
        rating: string;
      }>;
    };
    credits: {
      cast: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
      }>;
      crew: Array<{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        credit_id: string;
        department: string;
        job: string;
      }>;
    };
    backdrop_path: string;
    created_by: Array<{
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string;
    }>;
    episode_run_time: Array<number>;
    first_air_date: string;
    genres: Array<{
      id: number;
      name: string;
    }>;
    homepage: string;
    id: number;
    in_production: boolean;
    languages: Array<string>;
    last_air_date: string;
    last_episode_to_air: {
      id: number;
      name: string;
      overview: string;
      vote_average: number;
      vote_count: number;
      air_date: string;
      episode_number: number;
      episode_type: string;
      production_code: string;
      runtime: number;
      season_number: number;
      show_id: number;
      still_path: string;
    };
    name: string;
    next_episode_to_air: {
      id: number;
      name: string;
      overview: string;
      vote_average: number;
      vote_count: number;
      air_date: string;
      episode_number: number;
      episode_type: string;
      production_code: string;
      runtime: number;
      season_number: number;
      show_id: number;
      still_path: string;
    };
    networks: Array<{
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: Array<string>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>;
    production_countries: Array<{
      iso_3166_1: string;
      name: string;
    }>;
    seasons: Array<{
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }>;
    spoken_languages: Array<{
      english_name: string;
      iso_639_1: string;
      name: string;
    }>;
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
  }
}

export { };

