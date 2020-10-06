import React, { Component } from "react";

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            companyname : '',
            username : '',
            email : '',
            password : '',
        }
    }
    handleChange= ({target}) =>{
        this.setState({[target.name]:target.value});
    };
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
            <form>
                <h3>Create Your Account</h3>

                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="xyz company" 
                    name="companyname"
                    value={this.state.companyname}
                    onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Your name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    name="username"
                    value={this.state.companyname}
                    onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
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
                    placeholder="*********" 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                </div>

                <div className="form-group checkbox1">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label label1" htmlFor="customCheck1">To Register with us please tick to agree to our
                        <a href="#"> Terms Conditions</a></label>
                        
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
                
            </form>
            </div>
            <p className="forgot-password text-center">
                    Already have an account? <a href="./login">Sign In</a>
                    </p>
            </div>
        );
    }
}
export default Register;