import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/Constants"; 
import { togglegpt } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constants";
const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const lang = useRef();
  
  const toggleGpt=()=>{
    dispatch(togglegpt());
  }
  
  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse');
          // ...
        } else {
          
          dispatch(removeUser());
          navigate('/');
        }
      });
      return ()=>unsubscribe();
},[]);

  const [isHover,setIsHover] = useState(false);
  const user = useSelector((store)=>store.user);
  console.log(user);
  const handleSignOut=()=>{
signOut(auth).then(() => {
navigate("/");  
}).catch((error) => {
  // An error happened.
});
  }
  
  return (
    <div className="flex justify-between bg-transparent z-10 absolute w-full">
    <div className="m-4 pl-12 w-40">
        <img src={Logo}
         alt="LogoImage"   
        />
    </div>

  {user &&( 
    <div className="flex">
    <div className="pt-2">
    <select className="p-2 m-2 bg-gray-500 text-white text-lg cursor-pointer">{
    SUPPORTED_LANGUAGES.map((lang)=>
      (<option key={lang.identifier}
      value={lang}
      >
        {lang.name}
      </option>
    )
    )
    }
    </select>
    <button onClick={toggleGpt} className="bg-purple-900 py-2 px-6 m-6 rounded-md font-normal text-white">Gpt Search</button>
    </div>
    <div className="px-6 pt-4 m-6"
  onMouseEnter={()=>setIsHover(true)}
  onMouseLeave={()=>setIsHover(false)}
  >
         
    <img src= {user.photoURL}
         alt="ProfileImage"   
        />
   {isHover && (<div className="absolute">    
   <button className="bg-transparent text-white text-lg" onClick={handleSignOut}>Sign out</button>
   </div>)}
    </div>
    </div>
  )}  
    </div>
  
  )
}

export default Header