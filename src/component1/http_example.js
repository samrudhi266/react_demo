import React from "react";
import axios from 'axios';
import { Component } from "react";

class Userdata extends Component{
    state={
        persons:[],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const persons=res.data;
            this.setState({persons});
        }

        )
    }
    render(){
        return(
            <ul>
                {
                    this.state.persons.map(person=> <li> {person.id} {person.name} </li>)
                }
            </ul>
        )
    }
}
export default Userdata;