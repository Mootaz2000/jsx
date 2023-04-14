import React from "react"
import PropTypes from "prop-types";

const Newprofile = (props) =>
{ return (
   < div>
 {props.handleName(`my name is ${props.name}`)}
   <div >
  <img src={props.children} className="imsty" />
  </div>
 <h5>{props.name}</h5>
 <h5>{props.bio}</h5>
 <h5>{props.profession}</h5>


 
 </div>
)

}
export default Newprofile;

Newprofile.defaultProps = {
  bio: "bbbbbb"}
  Newprofile.propTypes = {
    
    bio: PropTypes.string,
    handleName: PropTypes.func
   }