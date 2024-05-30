
import './App.css'
import { useAuthContext } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignUp  from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
// import GenderCheckBox from "./pages/SignUp/GenderCheckBox.jsx";
// import SideBar from "./components/SideBar/SideBar.jsx";
// import Conversations from "./components/SideBar/Conversations.jsx";
// import MessageContainer from "./components/messages/MessageContainer.jsx";

  export default function App() {
    const { authUser } = useAuthContext()
    console.log(authUser)

    return (
     <div className='p-4 h-screen flex items-center justify-center'>
      <Toaster/>
      <Routes>
        <Route path="/" element={ authUser ? <Home/> : < Navigate to="/login" />} />
        <Route path="/login" element={ authUser ? < Navigate to="/" /> : <Login />  }/>
        <Route path="/signup" element={ authUser ? < Navigate to="/" />  : <SignUp />} />
      </Routes>


      {/* <Home > </Home> authUser ? <Navigate to='/' /> :  */}
      {/* <SideBar/> */}
      {/* <MessageContainer /> */}

     </div>
    )
  }