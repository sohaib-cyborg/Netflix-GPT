import { useEffect } from "react";
import { options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addMovieData } from "../utils/movieSlice";
export const useMovies = () => {
  const dispatch = useDispatch();    
  const getDatFromApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addMovieData(json.results));
    
  };
  useEffect(() => {
    getDatFromApi(); 
  }, []);
};
