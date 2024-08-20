import Header from "./Header"
import { useMovies } from "../hooks/useMovies"
import Maincontainer from "./Maincontainer";
const Browse = () => {
  useMovies();
  return (
    
    <div>
    <Header/>
    <Maincontainer/>
    </div>
  )
}

export default Browse