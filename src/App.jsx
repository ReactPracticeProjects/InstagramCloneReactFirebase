import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layout/PageLayout/PageLayout";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebaseConfig";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to={"/"} /> : <AuthPage />}
        />
        {/* <Route path="/:username" element={<ProfilePage/>}/> */}
      </Routes>
    </PageLayout>
  );
};

export default App;
