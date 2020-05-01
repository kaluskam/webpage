import React from 'react'
import Axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: "",
            password: "",
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    async getData() {
        await Axios.get("http://localhost:8080/api/users/" + this.state.email, { withCredentials: false })
            .then(response => {
                if (response.data === null) {
                    console.log("musisz zalozyc konto")
                }
                else if (response.data !== null && response.data.password === this.state.password) {
                        this.props.logIn(response.data.name, response.data.surname, response.data.email)
                        this.exitLogin()
                    }
                else {
                    console.log("bledne hasło")
                }
                })
    }
                

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleChecked(event) {
        if (this.state.checked) {            
            this.setState({ checked: false })
        }
        else {this.setState({ checked: true })}
    }

    exitLogin() {
        this.props.exit()
    }

    exitAndOpenRegistration() {
        this.props.exit()
        this.props.openRegistration()
    }

    render() {
        return(
            <div  id="login-form">
                <button className="close-btn" onClick={e => this.exitLogin()}>x</button>
                <input className="log-reg-input" type="text" placeholder="Podaj email" value={this.state.email} 
                    onChange={this.handleChange} name="email" required />   
                <input className="log-reg-input" type="password" placeholder="Podaj hasło" value={this.state.password} 
                    onChange={this.handleChange} name="password" required /> 
                <span className="log-reg-btn" onClick={e => this.getData()}>Zaloguj się</span> 
                <div className="under-btn">
                    <label>
                        <input type="checkbox" onChange={this.handleChecked}/> Pamiętaj mnie
                    </label>                  
                    <a href="#" style={{float:"right", marginLeft: "0", textDecoration: "none", fontStyle: "italic", color: "inherit", paddingTop: "2px"}}>
                        Zapomniałeś hasła?</a>
                </div>            
                <button className="register" onClick={e => this.exitAndOpenRegistration()}>Nie posiadasz konta?</button>
            </div>
        )
    }
}

export default Login