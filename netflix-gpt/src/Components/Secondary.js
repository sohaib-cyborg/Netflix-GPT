import { useSelector } from "react-redux"
import MoveList from "./MoveList"

const Secondary = () => {
   const movies = useSelector((store)=> store.movie); 
  return (
    <div>
        <MoveList title={"Now Playing Movies"} movies={movies?.MovieList}/>
        <MoveList title={"Popular"} movies={movies?.popular}/>
    </div>
  )
}

export default Secondary