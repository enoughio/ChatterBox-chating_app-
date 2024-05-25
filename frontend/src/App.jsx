
import './App.css'
import { Route, Routes } from "react-router-dom";

import SignUp  from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
import GenderCheckBox from "./pages/SignUp/GenderCheckBox.jsx";
import Home from "./pages/Home/Home.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Conversations from "./components/SideBar/Conversations.jsx";
import MessageContainer from "./components/messages/MessageContainer.jsx";


  export default function App() {
    return (
     <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>


      {/* <Home > </Home> */}
      {/* <SideBar/> */}
      {/* <MessageContainer /> */}

     </div>
    )
  }