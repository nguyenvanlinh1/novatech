import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./Admin/DashBoard/DashboardAdmin";
import Home from "./Admin/DashBoard/Home";
import "./App.css";
import SignIn from "./User/Auth/Signin";
import SignUp from "./User/Auth/Signup";
import HomePage from "./User/HomePage/HomePage";
import AdminRouters from "./Router/AdminRouters";
import UserRouters from "./Router/UserRouters";

function App() {
  return (
    <>
    <Routes>
      <Route path="/admin/*" element={<AdminRouters/>}></Route>
      <Route path="/*" element={<UserRouters/>}></Route>
    </Routes>
    {/* <Home/> */}
      {/* <HomePage /> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
