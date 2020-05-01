import React from 'react'
import Axios from 'axios'

class Registration extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            repPassword: "",
            ready: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitRegistration = this.submitRegistration.bind(this)
    }

    exitRegistration() {
        this.props.exit()
    }

    exitAndOpenLogin() {
        this.props.exit()
        this.props.openLogin()
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async submitRegistration() {  
        if (this.state.repPassword !== this.state.password) {
            console.log("invalid input")
        }
        else {
            await Axios.post("http://localhost:8080/api/users" , { name: this.state.name, surname: this.state.surname, 
                                email: this.state.email, password: this.state.password}, { withCredentials: false })
                .then(response => {
                    
                    if (response.data) {
                        console.log("Wszystko ok")
                        this.exitAndOpenLogin()
                    }
                    else {
                        console.log("Ten adres email jest już używany")
                    }
                })
            this.setState({ready: false})
        }
    }

    render() {
        return(
            <div  id="registration-form">
                <button className="close-btn" onClick={e => this.exitRegistration()}>x</button>
                <div id="name-surname">
                    <input className="log-reg-input" style={{marginRight: "0", width: "32%"}} type="text" placeholder="Podaj imię" value={this.state.name} name="name"
                         onChange={this.handleChange} required /> 
                    <input className="log-reg-input" style={{marginRight: "0", width: "32%"}} type="text" placeholder="Podaj nazwisko" value={this.state.surname} name="surname"
                         onChange={this.handleChange} required /> 
                </div>                
                <input className="log-reg-input" type="email" placeholder="Podaj email" value={this.state.email} name="email"
                         onChange={this.handleChange} required />                   
                <input className="log-reg-input" type="password" placeholder="Podaj hasło" value={this.state.password} name="password"
                         onChange={this.handleChange} required />                 
                <input className="log-reg-input" type="password" placeholder="Powtórz hasło" value={this.state.repPassword} name="repPassword"
                         onChange={this.handleChange} required /> 
                <span className="log-reg-btn" onClick={e => this.submitRegistration()} style={{marginBottom: "40px"}}>Zarejestruj się</span>                           
                <button className="login" onClick={e => this.exitAndOpenLogin()} >Masz już konto?</button>
            </div>
        )
    }
}

export default Registration