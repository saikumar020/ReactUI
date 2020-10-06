import React, { Component } from "react";

class Login extends Component{
        constructor(props){
            super(props);
            this.state={
                email : '',
                password : '',
                confpassword: '',
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
            <h3>Recover Password</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" 
                className="form-control" 
                placeholder="email@example.org" 
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                className="form-control" 
                placeholder="New Password" 
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                className="form-control" 
                placeholder="Confirm Password" 
                name="cnfpassword"
                value={this.state.confpassword}
                onChange={this.handleChange}
                />
            </div>

            <button type="submit"
            className="btn btn-primary btn-block btn-color button1"
            >Cofirm</button>
        </form>
        </div>
        </div>
        );
        }

}
export default Login;