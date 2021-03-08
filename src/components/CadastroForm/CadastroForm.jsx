import React, { Component } from 'react';
import "./style.css"


class CadastroForm extends Component {

    constructor(props){
        super(props)
        this.name = ""
        this.email = ""
        this.password = ""
    }

    _handlerName(event){
        this.name = event.target.value
    }

    _handlerEmail(event){
        this.email = event.target.value
    }

    _handlerPassword(event){
        this.password = event.target.value
        
    }

    _create_user(event){
        event.preventDefault()
        this.props.create_user(this.name,this.email,this.password)
    }

    render() { 

        let ErrorSpan;

        if(this.props.Cadastro_status == "Success"){
            console.log(this.props.Cadastro_error)
            ErrorSpan = <span className="Cadastro-error-msg error-success">{this.props.Cadastro_error}</span>
        }else{
            ErrorSpan = <span className="Cadastro-error-msg error-error">{this.props.Cadastro_error}</span>
        }

        return ( 
            <form className="Cadastro-form">
                <h3 className="Cadastro-Title">Cadastro</h3>
                <input
                    className="Cadastro-input Cadastro-input_name"
                    placeholder= "Name"
                    onChange = {(event) => this._handlerName(event)}
                    required
                />

                <input
                    className="Cadastro-input Cadastro-input_email" 
                    placeholder= "Email"
                    onChange = {(event) => this._handlerEmail(event)}
                    required
                />
                
                <input
                    className="Cadastro-input Cadastro-input_password"
                    type="password"
                    placeholder= "Password"
                    onChange = {(event) => this._handlerPassword(event)}
                    required
                />
                
                <button 
                className="Cadastro-send"
                onClick = {(event) => this._create_user(event)}
                >
                    Cadastrar
                

                </button>

                {ErrorSpan}

            </form>
        );
    }
}

export default CadastroForm;