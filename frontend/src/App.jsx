import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/course"
            element={
              authUser ? (
                <Courses></Courses>
              ) : (
                <Navigate to="/signup"></Navigate>
              )
            }
          ></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
