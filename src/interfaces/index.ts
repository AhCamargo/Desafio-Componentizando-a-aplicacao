import { ReactNode } from "react";

 export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

export interface MoviesProviderProps {
    children: ReactNode
}  

  
export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

 export interface MoviesProviderData {
    selectedGenreId: number;
    selectedGenre: GenreResponseProps;
    genres: GenreResponseProps[]; 
    movies: MovieProps[], 
    handleClickButton: (id: number) => void;
}  