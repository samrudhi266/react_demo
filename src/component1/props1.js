import React from "react";
function Name(props){
    let Name=props.name;
    let Value=props.value;
    return(
        <h1>The value of property  {Name} {Value} </h1>
    )
    
}
export default Name;
