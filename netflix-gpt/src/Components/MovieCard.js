import { Img_cdn } from "../utils/Constants"
const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img className="w-full" alt="Movie Card" src={Img_cdn + posterPath} />
    </div>
  )
}


export default MovieCard