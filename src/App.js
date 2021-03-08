import "./app.css";
import React, { Component } from 'react';
import LoginForm from "./components/LoginForm";
import CadastroForm from "./components/CadastroForm";
import ListaUsers from "./components/ListaUsers/ListaUsers";

class App extends Component {

	constructor(){
		super()

		this.state = {
			users:[]
		}
	}

	limparErros(){
		this.setState(
			{
				Login_error:""
			}
		)
	}

	limparSelected(){
		this.state.users.forEach((user) => {
			const counter = this.state.users.indexOf(user)
				const NewState = this.state.users
				NewState[counter].selected = false
				this.setState(
					{
						users:NewState
					}
				)
		})
	}

	login(name,password){
		this.limparErros()
		this.limparSelected()
		if(this.state.users.length === 0){
			this.setState(
				{
					Login_error:"Nenhum usuario Cadastrado",
					Login_status:"Error"
				}
			)
		}
		this.state.users.forEach((user) => {
			if(name == user.name && password == user.password){
				const counter = this.state.users.indexOf(user)
				const NewState = this.state.users
				NewState[counter].selected = true
				this.setState(
					{
						users:NewState,
						Login_error:"logado com sucesso",
						Login_status:"Success"
					}
				)
				return
			}
			else{
				this.setState(
					{
						Login_error:"Usuario/senha invalida",
						Login_status:"Error"
					}
				)
			}
		})
	}

	create_user(name,email,password){
		this.limparErros()
		const selected = false
		
		let exist = false
		if(this.state.users.length == 0){
			this.setState(
				{
					users:[...this.state.users,{name,email,password,selected}],
					Cadastro_error: "Cadastrado com sucesso",
					Cadastro_status:"Success"	
				})
		}else{
			this.state.users.forEach((user) => {
				console.log(user)
				if(name == user.name || email == user.email){
					exist = true
					this.setState(
						{
							Cadastro_error: "Nome ou email ja em uso",
							Cadastro_status:"Error"
						}
					)
					return
				}
				
			})

		}

		if(exist == false){
			this.setState(
				{
					users:[...this.state.users,{name,email,password,selected}],
					Cadastro_error: "Cadastrado com sucesso",
					Cadastro_status:"Success"	
				})
			}
		
	
		
	}


    render() {
        return (
            <main className="main-container">
				<section className="Section_main">
                <LoginForm login={this.login.bind(this)}
				Login_error={this.state.Login_error}
				Login_status={this.state.Login_status}
				/>

                <CadastroForm 
				create_user={this.create_user.bind(this)}
				Cadastro_error={this.state.Cadastro_error}
				Cadastro_status={this.state.Cadastro_status}
				/>
                
            </section>
					<div className="Lista-container">
						<h3 className="Listh3">Lista de usuarios:</h3>
						<ListaUsers users={this.state.users}/>
					</div>
			</main>
        );
    }
}

export default App;
