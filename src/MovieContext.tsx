import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { MoviesProviderData, MoviesProviderProps, GenreResponseProps, MovieProps } from './interfaces'



export const MovieContext = createContext<MoviesProviderData>({} as MoviesProviderData);

export function MoviesProvider({children}: MoviesProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
    useEffect(() => {
      api.get<GenreResponseProps[]>('genres').then(response => {
        setGenres(response.data);
      });
    }, []);
  
    useEffect(() => {
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
      });
  
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }, [selectedGenreId]);
  
    function handleClickButton(id: number) {
      setSelectedGenreId(id);
    }

    return (
        <MovieContext.Provider value={{ selectedGenreId, selectedGenre, genres, movies, handleClickButton }} >
            {children}
        </MovieContext.Provider>
    )
}

