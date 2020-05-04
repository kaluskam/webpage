import React from 'react'
import Modal from 'react-modal'
import {BrowserRouter as Router, Switch, Route} from'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Home from './Components/Home'
import AM from './Components/AM'
import './index.css';
import Registration from './Components/Registration';
import User from './user'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpenLogin: false,
      isOpenRegistration: false,
      loggedIn: false,
      user: null
    }

    this.openLogin = this.openLogin.bind(this)
    this.closeLogin = this.closeLogin.bind(this)

    this.openRegistration = this.openRegistration.bind(this)
    this.closeRegistration = this.closeRegistration.bind(this)

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  openLogin() {
      this.setState({ isOpenLogin: true})
  }
  closeLogin() {
      this.setState({ isOpenLogin: false})
  }

  openRegistration() {
      this.setState({ isOpenRegistration: true})
  }
  closeRegistration() {
      this.setState({ isOpenRegistration: false})
  }

  logIn(name, surname, email) {
    this.setState({ loggedIn: true })
    this.setState({ user: new User(name, surname, email)})
    console.log(this.state.user)
  }
  logOut() {
    this.setState({ loggedIn: false })
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="app">
            <NavBar triggerLogin={this.openLogin} triggerRegistration={this.openRegistration} 
              modifyNavBar={this.state.loggedIn} logOut={this.logOut}/>
            <Modal className="modal-login" isOpen={this.state.isOpenLogin}>          
              <Login exit={this.closeLogin} openRegistration={this.openRegistration} logIn={this.logIn}/>
            </Modal>
            <Modal className="modal-register" isOpen={this.state.isOpenRegistration}>          
              <Registration exit={this.closeRegistration} openLogin={this.openLogin}/>
            </Modal>
            <Switch>                            
              <Route path="/" exact render={props => (<Home loggedIn={this.state.loggedIn} user={this.state.user}/>)} />
              <Route path="/AM" component={AM} />
              {/* <Route path="/MDiEP" component={MDiEP} />              
              <Route path="/PO" component={PO} />
              <Route path="/TP" component={TP} />
              <Route path="/PDU" component={PDU} />
              <Route path="/ASI" component={PO} /> */}

            </Switch>
            
        </div>
      </Router>
    )
  }  
}

export default App;
