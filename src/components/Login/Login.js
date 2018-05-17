import  React, { Component } from 'react';

import './Login.css';


class Login extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            whoisLog: true,
            checkIfLoged: this.props.checkIfLoged,
            changeParentLogin: "",
            email: "",
            password: ""
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleToggleChangeUser = this.handleToggleChangeUser.bind(this);
        this.handleChangeParentLoginResult = this.handleChangeParentLoginResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeParentLoginResult = (event) =>{
        const change =this.props.checkIfLoged ? false : true;
        this.props.changeParentLogin( change );
    };

    handleToggleClick() {
        this.setState(prevState => ({
            checkIfLoged: !prevState.checkIfLoged
        }));
    }

    handleToggleChangeUser(){
        this.setState(whoisLogin => ({
            whoisLog: !whoisLogin.whoisLog
        }));
    }
    handleChange(event) {
        this.setState({value: event.target.email});
        this.setState({value: event.target.password});
        console.log(event.target.password);
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
            return(
                <div className="container  Login">

                    <ul className="nav nav-tabs">

                        <li className="nav-item" onClick={this.handleToggleChangeUser} >
                            <a className="nav-link active Empleado" data-toggle="tab" href="#menu1">Empleado</a>
                        </li>
                        <li className="nav-item" onClick={this.handleToggleClick}>
                            <a className="nav-link Gestor" data-toggle="tab" href="#menu2">Gestor</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <br/>
                        <div id="menu1" className="container tab-pane active form-group">
                            <form className="forum" >
                                <input type="email" email={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" />
                                <br/>
                                <input type="password" password={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Contraseña*" name="name" />
                                <br/>
                                <button type="submit" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">Entrar</button>
                                <br/>
                            </form>
                        </div>

                    </div>
                </div>
            );
    }
}
export default Login;