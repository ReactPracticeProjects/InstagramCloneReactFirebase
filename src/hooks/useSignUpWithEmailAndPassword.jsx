import { auth } from "@/firebase/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  collection,

  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { database } from "@/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSingUp = async (email, password, username, fullName) => {
    if (!email || !password || !username || !fullName) {
      console.log("Please fill all necessary information");
      return;
    }

    const userNameREf = collection(database, "users");
    const queryForUsernameCheck = query(
      userNameREf,
      where("username", "==", username)
    );

    const querySnapshot = await getDocs(queryForUsernameCheck);
    if (!querySnapshot.empty) {
      console.log("username already exists");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser && error) {
        console.log(error);
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          username: username,
          email: email,
          fullName: fullName,
          bio: "",
          profilePic: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(database, "users", newUser.user.uid), userDoc);

        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [handleSingUp, user, loading, error];
};

export default useSignUpWithEmailAndPassword;
