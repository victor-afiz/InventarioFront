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
            password: "",
            showLogin: true

        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleToggleChangeUser = this.handleToggleChangeUser.bind(this);
        this.handleChangeParentLoginResult = this.handleChangeParentLoginResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeParentLoginResult = () =>{
        this.setState({showLogin: this.props.checkIfLoged});
        this.props.changeParentLogin(this.state.showLogin);
        // console.log("login",this.props.checkIfLoged);
        // console.log("login",this.state.showLogin);
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

    handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state.email);
        console.log(this.state.password);
    };

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state.password);
    }
    render() {
        if(this.state.showLogin) {
            return(
                <div className="container  Login">

                    <ul className="nav nav-tabs">

                        <li className="nav-item " onClick={this.handleToggleChangeUser} >
                            <a className="nav-link active Empleado" data-toggle="tab" >Empleado</a>
                        </li>
                        <li className="nav-item" onClick={this.handleToggleClick}>
                            <a className="nav-link Gestor" data-toggle="tab" >Gestor</a>
                        </li>
                    </ul>
                    <div className="tab-content radius">
                        <br/>
                        <div  className="container tab-pane active form-group ">
                            <form className="forum" onSubmit={this.handleSubmit} >
                                <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" name="email"/>
                                <br/>
                                <input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Contraseña*" name="password" />
                                <br/>
                                <button type="button" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">Entrar</button>
                                <br/>
                            </form>
                        </div>

                    </div>
                </div>
            );
        }else {
           return null
        }
    }
}
export default Login;