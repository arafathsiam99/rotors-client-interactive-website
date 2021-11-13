import { useEffect, useState } from "react";
import initializeAuthentication from "./firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const UseFirebase = () => {
  const [admin, setAdmin] = useState(false);
  const [setName] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setIsLoading(false))

      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  const saveGoogleLoginUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://rocky-brushlands-20414.herokuapp.com/", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`https://rocky-brushlands-20414.herokuapp.com/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    googleSignIn,
    admin,
    isLoading,
    setUser,
    setName,
    logOut,
  };
};

export default UseFirebase;
