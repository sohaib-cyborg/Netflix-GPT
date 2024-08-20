import { useRef, useState } from "react";
import Header from "./Header";
import { validateInput } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Avatar_url } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();

  const [signToggle, setsignToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButton = () => {
    setsignToggle(!signToggle);
  };

  const validationPoint = () => {
    let message = null;
    if (!name.current) {
      message = validateInput(
        email.current.value,
        password.current.value,
        null
      );
    } else {
      message = validateInput(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    setErrorMessage(message);

    if (message) return;

    if (!signToggle) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Avatar_url,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.log(errorMessage);
        });
    }
    if (signToggle) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black">
      <div className="absolute z-10">
        <Header />
      </div>
      <div className="absolute bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/e77e486f-faa0-4d8f-9e00-f0604c318022/PK-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_09ca4e44-1c7b-48e0-b4b6-8ec41c04815e_small.jpg"
          alt="background"
          className="opacity-40"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white left-0 right-0 mx-auto py-20 px-5 my-24 w-3/12 bg-black bg-opacity-60"
      >
        <h1>{signToggle ? "Sign In" : "Sign Up"}</h1>
        {!signToggle && (
          <input
            ref={name}
            className="p-2 my-2 w-full rounded-sm bg-transparent text-white border border-solid border-gray-600"
            type="text"
            placeholder="name"
          />
        )}

        <input
          ref={email}
          className="p-2 my-2 w-full rounded-sm bg-transparent text-white border border-solid border-gray-600"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-2 my-2 w-full rounded-sm bg-transparent text- border border-solid border-gray-600"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-700 text-lg py-2">{errorMessage}</p>
        <button
          onClick={validationPoint}
          className="p-2 my-2 w-full bg-red-700 rounded-sm"
        >
          {signToggle ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleButton} className="cursor-pointer">
          {signToggle ? (
            <span>
              {" "}
              New to Netflix?{" "}
              <span className="hover:underline hover:font-bold">
                Sign up now.
              </span>
            </span>
          ) : (
            <span>
              Already a user?{" "}
              <span className="hover:underline hover:font-bold">Sign In.</span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
