declare global {
  type ShowType = "movies" |"tv" |"all"
  
  interface MoviesAndTv {
    id: number;
    title: string;
    genres: Array<number>;
    overview: string;
    posterPath: string;
    popularity: number;
    showType: ShowType;
    releaseDate: string;
  }

  interface People {
    name: string;
    role: string;
    picture: string;
    popularity: number;
  }

  type SortBy = 
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc"
  
}

export { }