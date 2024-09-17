import Header from "./Header"
import { useMovies } from "../hooks/useMovies"
import Maincontainer from "./Maincontainer";
import Secondary from "./Secondary";
import { usePopular } from "../hooks/usePopular";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const toggle = useSelector((store)=>store?.gpt?.showGpt);

  useMovies();
  usePopular();
  return (
    <div>
    <Header/>
    {toggle?(
       <GptSearch/>
    ):(
    
    <>  
    <Maincontainer/>
    <Secondary/>
    </>)} 
    </div>
  )
}

export default Browse