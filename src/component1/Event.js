import React from "react";
import { useState } from "react";

function Eventexample(){
    const[value,setvalue]=useState(true)
    const[value1,setvalue1]=useState("hello")
    function change(){
      document.getElementById("greet").innerHTML="welcome"
       

    }
    function set(){
        document.getElementById("greet").innerHTML="hello"   
    }
    function reset(){
        if(value==true){
            change()
        }
        else{
            set()
        }
    }
    return(
        <>
        <button onClick={change}>Click to change</button>
        <h2 id="greet">{value1}</h2>
        </>
    )
}
export default Eventexample;