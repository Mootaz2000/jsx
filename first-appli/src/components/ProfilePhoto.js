import React from "react";
import FullName from "./FullName";
import Localisation from "./Localisation";


const ProfilePhoto = () => {
return (
    <div className="stph">
        <div className="text">
        <FullName/>
        <Localisation/>
        </div>
    <img className="stylepic" src ="/maphoto.jpg"/>
    </div>
    
)

}

export default ProfilePhoto;