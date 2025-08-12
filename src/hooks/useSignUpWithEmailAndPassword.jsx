import { auth } from "@/firebase/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { database } from "@/firebase/firebaseConfig";


const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSingUp = async (email, password, username, fullName) => {
    if (!email || !password || !username || !fullName) {
      console.log("Please fill all necessary information");
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

        const userCollectionRef = collection(database,"users");
        await addDoc(userCollectionRef,userDoc)

        localStorage.setItem("user-info",JSON.stringify(userDoc))

      }
    } catch (error) {
      console.log(error);
    }
  };

  return [handleSingUp, user, loading, error];
};

export default useSignUpWithEmailAndPassword;
