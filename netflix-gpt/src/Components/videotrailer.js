import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const Videotrailer = ({ movieId }) => {
  useMovieTrailer(movieId);
  const vidData = useSelector((store) => store.movie?.TrailerData);

  return (
    <div className="w-screen">
 {/*   <iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${vidData?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  
></iframe>*/}
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+vidData?.key+"?si=y_BxKz1vgkG03n1C"
        +"?&autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videotrailer;
