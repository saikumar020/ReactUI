import React, { Component } from "react";

class Login extends Component{
        constructor(props){
            super(props);
            this.state={
                email : '',
                password : '',
            }
        }
        handleChange= (event) =>{
            var target=event.target;
            this.setState({[target.name]:target.value});
        };
        render(){
           return(
            <div className="wrapper">
            <div className="form-wrapper">
            <form>
            <h3>Login to your Account</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" 
                className="form-control" 
                placeholder="email@example.org" 
                name="email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                className="form-control" 
                placeholder="********" 
                name="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </div>

            <button type="submit"
            className="btn btn-primary btn-block btn-color button1"
            >Login</button>
        </form>
        </div><br/>
        <p className="forgot-password text-center">
                Don't have an account? <a href="./register">Register</a>
            </p>
            <p className="forgot-password text-center">
                Forgotten your password? <a href="./recover">Recover Password</a>
            </p>
        </div>
        );
        }

}
export default Login;