import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRouters from "./Router/AdminRouters";
import UserRouters from "./Router/UserRouters";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
        <Route path="/*" element={<UserRouters />}></Route>
      </Routes>
      {/* <Home/> */}
      {/* <HomePage /> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
