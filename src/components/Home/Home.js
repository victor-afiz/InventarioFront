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

        fetch("/Manager/delete/?id=4",{method: 'GET'})
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

    handleOnSubmitPost(e) {

        const checkStatus = response => {
            const hasError = (response.status < 200 || response.status >= 300)
            if (hasError) {
                console.log(response.text());
            }else {
                console.log('ok');
            }
            return response;
        };


        fetch('/Manager/delete/', {
            method: 'POST',
            body: JSON.stringify({
                id: '1',
                // nickName :"5ref5",
                // name : "DSdFG",
                // photo : "DdSF",
                // rolID : "2",
                // password : "DdSFG",
                // email : "DDD@DFG.DF"
            })
        }).then(checkStatus).catch(err => {
            console.log(err)
        });
    }
    handleOnSubmitGet(e) {

        const checkStatus = response => {
            const hasError = (response.status < 200 || response.status >= 300)
            if (hasError) {
                console.log(response.text());
            }else {
                console.log(response.json());
            }
            return response;
        };


        fetch("/Manager/delete/?id=4",{method: 'GET'})
            .then(checkStatus)
            .catch(err => {
                console.log(err)
            });
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
