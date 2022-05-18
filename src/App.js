import React from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import Header from './components/header/header'
import Feeds from './components/feeds/feeds';
import SideBar from './components/sideBar/sideBar';
import { selectUser } from './features/userSlice';
import Signup from './components/pages/signup';

function App() {
const user = useSelector(selectUser)

  return (
    <div>

      <Header />
      {console.log(user)}
 {!user ? (<Signup/>) : (
  <div className="appBody">

<SideBar />

<Feeds />
{/* <widget /> */}
</div>
 )}




    </div>
  );
}

export default App;


// const firebaseConfig = {
//   apiKey: "AIzaSyBmk-BGI8z_VqCxq13vWL9nfngPm7nnyuo",
//   authDomain: "linkedin-6222a.firebaseapp.com",
//   projectId: "linkedin-6222a",
//   storageBucket: "linkedin-6222a.appspot.com",
//   messagingSenderId: "993214341426",
//   appId: "1:993214341426:web:5b63863fb617446156772b"
// };