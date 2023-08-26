export interface IMovie {
  _id: string;
  plot: string;
  genres: Array<string>;
  runtime: number;
  cast: Array<string>;
  num_mflix_comments: number;
  poster: string;
  title: string;
  lastupdated: string;
  languages: Array<string>;
  released: Date;
  directors: Array<string>;
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: Array<string>;
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    dvd: Date;
    lastUpdated: Date;
  };
}
