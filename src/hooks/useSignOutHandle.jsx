import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";

const useSignOutHandle = () => {
  const navigate = useNavigate();
  const [signOut, signoutLoading, signouterror] = useSignOut(auth);
  const logOutUser = useAuthStore((state) => state.logout);

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      alert("sign out success");
      logOutUser();
    } catch (e) {
      console.log(e);
    }
  };

  return [handleSignOut, signoutLoading, signouterror];
};

export default useSignOutHandle;
