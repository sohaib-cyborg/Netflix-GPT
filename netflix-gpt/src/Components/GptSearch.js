import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languages";
import { genAI} from "../utils/gemini";
import { HarmBlockThreshold, HarmCategory, GoogleGenerativeAIError } from "@google/generative-ai";
import { useRef, useState } from "react";
import { options } from "../utils/Constants";
import { setGptResponse } from "../utils/gptSlice";
import MoveList from "./MoveList";

const GptSearch = () => {
  const [error,setError]=useState(null);
  const data = useSelector((store)=>store.gpt);
  const dispatch = useDispatch();
  const prompt = useRef();
  const fetchMovie=async(movie)=>{
  try{
  const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
  const json=await data.json();
  return json;}catch(e){
   setError(e);
  }
  }
  const handleGenai = async () => {
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,   
    
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,   
    
        threshold: HarmBlockThreshold.BLOCK_NONE,   
    
      },
    ];
    try{
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" },{safetySettings: safetySettings});
    const promp = "Act as a movie recommendation system and suggest some movies for:"+prompt?.current?.value+ " only give 5 comma separated  names of the movies. Take this as an example output: sholay,andaz apna apna,hum dil de chukay,pagal,golmal";

    const result = await model.generateContent(promp);
    const arr= result.response.text().split(',')
    
    if(arr.length>0){
      arr[arr.length-1]= arr[arr.length-1].trim();
    }
    const promiseArray=arr.map((movie)=>(fetchMovie(movie)));
    let tmdbResults;
    try{
     tmdbResults = await Promise.all(promiseArray);
    }catch(e){
      setError(e.message);
      return;
    }
   
    dispatch(setGptResponse({movieName:arr,movieResult:tmdbResults}));
    
  } catch(error){
      if(error instanceof GoogleGenerativeAIError){
        setError(error.message);
      }else{
        setError("An unexpected error occured!")
      }
    }
  };
  const inputLang = useSelector((store) => store.config?.selectedlang);
  return (
    <div className="fixed inset-0 bg-black opacity-90 overflow-y-scroll">
      <div className="absolute mt-28 p-4 ml-[25pc] w-1/2 z-30 flex">
        <input
          ref={prompt}
          type="text"
          placeholder={languages[inputLang].placeholder}
          className=" border border-solid border-black w-full my-4 py-2 px-2 text-lg"
        ></input>
        
        <div className="pt-4">
          <button
            onClick={handleGenai}
            className="text-white text-lg font-light rounded-lg bg-gray-800 ml-4 flex-none py-2 px-4 h-auto
             transition duration-200 ease-in-out transform hover:bg-gray-700 active:scale-95 active:bg-gray-600"
          >
            {languages[inputLang].search}
          </button>
        </div>
      </div>
      {error?(<div className="text-center">
          <h1 className="text-red-700 z-20 mt-[13pc] text-3xl font-bold">{error}</h1>
          </div>):data?.movieName?.length > 0 &&(
         <div className="p-4 mt-[30pc] z-15">
          {
           data.movieName.map(
            (movie,index)=>(
         <MoveList key={index} title={movie} movies={data?.movieResult[index]?.results}/>)
           )
          }  
         </div>
          )}

    </div>
  );
};

export default GptSearch;
