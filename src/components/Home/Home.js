import React, { Component } from 'react';

import './Home.css';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Table from '../Table/Table';



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

    componentDidMount() {

        fetch("/Manager/",{method: 'GET'})
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        maganers: res
                    });
                     console.log(this.state.maganers);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error);
                }
            );
    }

render(){

        return (
            <div className="Home">
                <header className="Home-header">
                </header>

                {this.state.login ? <Menu/> : ""}

                <div className="Home-intro">
                    <div className="row panel">
                        <div className="col-12 col-sm-1 col-md-1 col-lg-3">

                        </div>
                        <div className="col-12 col-sm-10 col-md-10 col-lg-6 panel-login">
                            {!this.state.login ? <Login checkIfLoged={this.state.login} changeParentLogin={this.changeloger}/> : <Table data={this.state.maganers}/>}
                        </div>
                        <div className="col-12 col-sm-1 col-md-1 col-lg-3">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
