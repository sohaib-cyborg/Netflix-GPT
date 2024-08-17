import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate('/');
        }
      });
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
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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