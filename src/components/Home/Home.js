import React, { Component } from 'react';

import './Home.css';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
class Home extends Component
{
    render(){
        return (
            <div className="Home">
                <header className="Home-header">
                </header>
                <Menu/>
                <p className="Home-intro">
                    <div className="row panel">
                        <div className="col-4">

                        </div>
                        <div className="col-4 panel-login">
                           <Login/>
                        </div>
                        <div className="col-4">

                        </div>
                    </div>
                </p>
            </div>
        );
    }

}

export default Home;
