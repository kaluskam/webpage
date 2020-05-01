import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    openLogin() {
            this.props.triggerLogin()
    }

    openRegistration() {
            this.props.triggerRegistration()
    }

    handleLogOut() {
        this.props.logOut();
    }
    
    render()
    {   if (this.props.modifyNavBar) {
            return(
                <div className="nav-bar">
                    <Link style={{textDecoration: "none"}} to="/"><span>Home</span></Link>
                    <Link style={{textDecoration: "none"}} to="/AM"><span>AM</span></Link>
                    <Link style={{textDecoration: "none"}} to="/MDiEP"><span>MDiEP</span></Link>
                    <Link style={{textDecoration: "none"}} to="/PO"><span>PO</span></Link>
                    <Link style={{textDecoration: "none"}} to="/TP"><span>TP</span></Link>
                    <Link style={{textDecoration: "none"}} to="/PDU"><span>PDU</span></Link>
                    <Link style={{textDecoration: "none"}} to="/ASI"><span>ASI</span></Link>
                    <span id="right-bar">
                        <span className="btn" onClick={e => this.handleLogOut()}>Wyloguj się</span>
                    </span>            
                </div>
            )
        }
        return(
            <div className="nav-bar">
                <Link style={{textDecoration: "none"}} to="/"><span>Home</span></Link>
                <Link style={{textDecoration: "none"}} to="/AM"><span>AM</span></Link>
                <Link style={{textDecoration: "none"}} to="/MDiEP"><span>MDiEP</span></Link>
                <Link style={{textDecoration: "none"}} to="/PO"><span>PO</span></Link>
                <Link style={{textDecoration: "none"}} to="/TP"><span>TP</span></Link>
                <Link style={{textDecoration: "none"}} to="/PDU"><span>PDU</span></Link>
                <Link style={{textDecoration: "none"}} to="/ASI"><span>ASI</span></Link>
                <span id="right-bar">
                    <span className="btn" onClick={e => this.openLogin()}>Zaloguj się</span>
                    <span className="btn" onClick={e => this.openRegistration()}>Zarejestruj się</span>
                </span>
                
            </div>
        )
    }
        
}

export default NavBar