
import MovieCard from "./MovieCard"
const MoveList = ({title,movies}) => {

  return (
    <div className="bg-black pb-44">
        <div className="-mt-40 relative z-20">
       <h1 className="text-white text-lg font-bold py-2 px-2">{title}</h1>
       <div className="flex overflow-x-scroll scrollbar-hide" >
       <div className="flex px-4">
        {movies?.map((movie)=><div key={movie.id} className="flex-none w-40 px-2 py-2 my-2">
        <MovieCard posterPath={movie.poster_path} />
      </div>)}
       </div>
       </div>
        </div>
    </div>
  )
}

export default MoveList