import { auth, database } from "@/firebase/firebaseConfig";
import useAuthStore from "@/store/authStore";
import { doc, getDoc } from "firebase/firestore";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const useLoginWithEmailAndPassoword = () => {
  const [signInWithEmailAndPassword, user, loginloading, loginerror] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      console.log("Enter all fields");
      return;
    }

    try {
      const userlogin = await signInWithEmailAndPassword(email, password);
      if (!userlogin && loginerror) {
        console.log("error while login");
        return;
      }

      const userDocRef = doc(database, "users", userlogin.user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        console.log("User data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
      localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
      

      loginUser(docSnap.data());
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return [handleLogin, user, loginloading, loginerror];
};

export default useLoginWithEmailAndPassoword;
