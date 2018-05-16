import React, { Component } from 'react';

import './Home.css';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Table from '../Table/Table';

const NUMBERS = ['Name','Surname','Email','Rol'];

class Home extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            login : false,
            maganers : ""
        };
    }
    changeloger = (bol) => {
        this.setState({login : bol});
        console.log(this.state.login);
    };

    setManager = (managers) => {
        this.setState({maganers : managers});
        console.log(this.state.maganers);
    };


    render(){

        return (
            <div className="Home">
                <header className="Home-header">
                </header>

                {this.state.login ? <Menu/> : ""}

                <p className="Home-intro">
                    <div className="row panel">
                        <div className="col-12 col-sm-1 col-md-1 col-lg-3">

                        </div>
                        <div className="col-12 col-sm-10 col-md-10 col-lg-6 panel-login">
                            {!this.state.login ? <Login managers={this.state.maganers} checkIfLoged={this.state.login} changeParentLogin={this.changeloger}/> : <Table td={NUMBERS}/>}
                        </div>
                        <div className="col-12 col-sm-1 col-md-1 col-lg-3">

                        </div>
                    </div>
                </p>
            </div>
        );
    }

}

export default Home;
