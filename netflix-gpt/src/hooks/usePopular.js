import { useEffect } from "react";
import { options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";
export const usePopular = () => {
  const dispatch = useDispatch();    
  const getDatFromApi = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json = await data.json();
    dispatch(addPopular(json.results));
    
  };
  useEffect(() => {
    getDatFromApi(); 
  }, []);
};
