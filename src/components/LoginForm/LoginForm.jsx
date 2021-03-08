import React, { Component } from 'react';
import "./style.css"


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.Login_name = ""
        this.Login_password = ""
    }


    _handlerLoginName(event){
        this.Login_name = event.target.value
    }

    _handlerLoginPassword(event){
        this.Login_password = event.target.value
    }

    _login(event){
        event.preventDefault()

        this.props.login(this.Login_name,this.Login_password)
    }

    render() { 
        let errormsg;
        if(this.props.Login_status === "Success"){
            errormsg = <span className="Login-error-msg error-sucess">{this.props.Login_error}</span>
        }else{
            errormsg = <span className="Login-error-msg error-error">{this.props.Login_error}</span>
        }

        return ( 
            <form action="" className="Login-Form">
                <h3 className="Login-Form_title" >Login:</h3>

                <input className="Login-Form_name" type="text"
                placeholder="Name"
                onChange={(event) => this._handlerLoginName(event)}
                required
                />

                <input className="Login-Form_password"  type="password"
                placeholder="Password"
                onChange={(event) => this._handlerLoginPassword(event)}
                required
                />

                <button className="Login-Form_send" 
                onClick={(event) => this._login(event)}
                >
                    Login
                </button>

                {errormsg}
                
            </form>
        );
    }
}

export default LoginForm;