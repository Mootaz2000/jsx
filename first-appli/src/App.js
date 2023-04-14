import React from "react";
import FullName from "./components/FullName";
import Localisation from "./components/Localisation";
import Navig from "./components/Navig";
import Newprofile from "./components/Newprofile ";
import Profile from "./components/Newprofile ";
import ProfilePhoto from "./components/ProfilePhoto";
import "./components/style.css";


const App = () => {
  const handleName = name => alert(name)
  
  
 return (
  <div style={{color: "black",textAligne:'center'}} >
  
    <Navig/>-
     <ProfilePhoto/>
     <Newprofile  name="Moetez Dhafer"  profession="entrepreneur" handleName={handleName} bio="" >https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg</Newprofile>
     
   
   </div>
 );
};
export default App