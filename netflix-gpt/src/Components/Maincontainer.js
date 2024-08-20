import { useSelector } from "react-redux"
import VideoTitle from "./videoTitle"
import Videotrailer from "./videotrailer"

const Maincontainer = () => {
  const moviedata = useSelector((store)=>store.movie?.MovieList);
  
  if(!moviedata) return;
  const {original_title,overview,id} = moviedata[0];
  
  console.log(original_title);  
  return (
    <div>
        <VideoTitle titleData={original_title} overview={overview}/>
        <Videotrailer movieId={id}/>
    </div>
  )
}

export default Maincontainer