import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constants";
import { useEffect } from "react";
import { addTrailerData } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerData = useSelector((store) => store.movie?.TrailerData);
  const fetchVideo = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((movie) => movie.type === "Trailer");

    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerData(trailer));
  };
  useEffect(() => {
    !trailerData && fetchVideo(id);
  }, []);
};
export default useMovieTrailer;
