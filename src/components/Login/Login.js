import  React, { Component } from 'react';

import './Login.css';
import Employer from '../Login/Employer/Employer';
import Manager from '../Login/Manager/Manager';
class Login extends Component
{
    render() {
        return(
            <div className="container mt-3 Login">

                <ul class="nav nav-tabs">

                    <li class="nav-item">
                        <a class="nav-link active Empleado" data-toggle="tab" href="#menu1">Empleado</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link Gestor" data-toggle="tab" href="#menu2">Gestor</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <br/>
                    <Employer/>
                    <Manager/>

                </div>
            </div>
        );

    }
}
export default Login;