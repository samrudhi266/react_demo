import React from "react";
import {Component} from "react";

class Msg extends Component{
    constructor(){
        super();
        this.state={
            message:"hello",
            count:0,
        };

    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.setState({message: "welcome to reactjs "})}}>Click to change</button>

            <button onClick={()=>{
                let no=this.state.count
                this.setState({
                    count:no+1
                })

            }}>click to increment</button>
            <h1>{this.state.count}</h1>
            </>
        )
    }
}
export default Msg;