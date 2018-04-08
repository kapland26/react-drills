import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(e){
        this.setState({ username : e});
        console.log(e);
    }
    handlePasswordChange(e){
        this.setState({ password : e});
        console.log(e);
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render(){
        return(
            <div className= "Login">
            Username:
            <input onChange={(e)=> this.handleUsernameChange(e.target.value)} type="text" />
            Password:
            <input onChange={(e)=> this.handlePasswordChange(e.target.value)} type="text" />
            <button onClick={()=> this.handleLogin()}> Login </button>
            </div>
        )
    }
}

export default Login;