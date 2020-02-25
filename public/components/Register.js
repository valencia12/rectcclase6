import React, {Component} from 'react';

const initState = {
    username: "",
    email: "",
    password: "",
}
export default class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            ...initState,
        }
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.id]:event.target.value,
        })
    }

    render(){
        return(
        <> 
            <form>
                <label>username:
                    <input
                    type = "text"
                    id = "username"
                    value = {this.state.username}
                    />
                </label>

                <label>email:
                    <input
                    type = "text"
                    id = "email"
                    value = {this.state.email}
                    />
                </label>
                <label>password:
                    <input
                    type = "password"
                    id = "password"
                    value = {this.state.password}
                    />
                </label>
                <button type="submit"></button>
            </form>
        </>
        );
    }
}