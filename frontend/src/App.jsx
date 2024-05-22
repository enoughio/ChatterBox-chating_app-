import SignUp  from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
import GenderCheckBox from "./pages/SignUp/GenderCheckBox.jsx";
import Home from "./pages/Home/Home.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Conversations from "./components/SideBar/Conversations.jsx";
import MessageContainer from "./components/messages/MessageContainer.jsx";


import './App.css'

  export default function App() {
    return (
     <div className='p-4 h-screen flex items-center justify-center'>

      <Home > </Home>
      {/* <SideBar/> */}
      {/* <MessageContainer /> */}
     </div>
    )
  }