import { auth, database } from "@/firebase/firebaseConfig";
import useAuthStore from "@/store/authStore";
import { Box } from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleSignIn = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        console.error("Google Sign-In Error:", error);
        return;
      }

      const docRef = doc(database, "users", newUser.user.uid);
      const docsnapshot = await getDoc(docRef);

      if (docsnapshot.exists()) {
        const user = docsnapshot.data();
        localStorage.setItem("user-info", JSON.stringify(user));
        loginUser(user);
        
      }else{
 const userDoc = {
          uid: newUser.user.uid,
          username: newUser.user.email.split("@")[0],
          email: newUser.user.email,
          fullName: newUser.user.displayName,
          bio: "",
          profilePic: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(database, "users", newUser.user.uid), userDoc);

        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }

    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <>
      <Box marginTop={4}>
        <div className="flex items-center justify-center gap-2">
          <img src="/google.png" className="w-[20px]" alt="" />
          <button
            onClick={handleGoogleSignIn}
            className="!text-blue-700 cursor-pointer"
          >
            {prefix} with google
          </button>
        </div>
      </Box>
    </>
  );
};

export default GoogleAuth;
