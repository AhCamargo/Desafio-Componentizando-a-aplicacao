import { useContext } from "react";
import { MovieContext } from '../MovieContext'

export function useMovies(){
    const context = useContext(MovieContext);
    return context;
}