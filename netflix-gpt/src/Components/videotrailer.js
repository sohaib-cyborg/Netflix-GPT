import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const Videotrailer = ({ movieId }) => {
  useMovieTrailer(movieId);
  const vidData = useSelector((store) => store.movie?.TrailerData);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+vidData?.key+"?si=y_BxKz1vgkG03n1C"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videotrailer;
