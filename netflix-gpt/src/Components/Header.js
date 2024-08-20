import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/Constants"; 
const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
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
    <div className="flex justify-between">
    <div className="m-4 pl-12 w-52">
        <img src={Logo}
         alt="LogoImage"   
        />
    </div>
  {user &&( <div className="p-6 m-6"
  onMouseEnter={()=>setIsHover(true)}
  onMouseLeave={()=>setIsHover(false)}
  >    
    <img src= {user.photoURL}
         alt="ProfileImage"   
        />
   {isHover && (<div className="absolute">    
   <button className="bg-transparent text-black text-lg" onClick={handleSignOut}>Sign out</button>
   </div>)}
    </div>
  )}  
    </div>
  
  )
}

export default Header