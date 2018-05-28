import React, { Component } from 'react';

import './Home.css';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import Table from '../Table/Table';
import Test from '../Test/Test';
import Add from  '../Add/Add'

function ShowComponents(props) {
    let MenuElement = props.show.MenuElementSelected;
    switch (MenuElement) {
        case "Añadir Gestor Nuevo":

            return (
                <div>
                    <Add ButtonText={"Añadir"} />
                </div>
            );
            break;
        case "Listado Gestores":
            console.log("Oranges are $0.59 a pound.");
            return (
                <div >
                    <Table show={props.show.ShowTableManager} />
                </div>
            );
            break;
        case "Bananas":
            console.log("Bananas are $0.48 a pound.");
            break;
        case "Cherries":
            console.log("Cherries are $3.00 a pound.");
            break;
        case "Mangoes":
        case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            break;
        default:
            return (
                <div className="warning">

                </div>
            );
            console.log("Sorry, we are out of " + props + ".");
    }

}

class Home extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            login : false,
            Managers : "",
            MenuElementSelected: "",
            ShowTableManager: true,
            ShowMenu: true
        };
    }

    ShowMenuElementSelected = (MenuElement) => {
            console.log(MenuElement);
            this.setState({MenuElementSelected: MenuElement})



    };

    changeloger = (bol) => {
        this.setState({login : bol});
        console.log("estado final",this.state.login);
    };

render(){
    console.log("hola");
        return (
            <div className="Home">
                <header className="Home-header">
                </header>

                {this.state.login ? < Menu showMenu={this.state.ShowMenu} menuSelected={this.ShowMenuElementSelected} /> : null}

                <div className="Home-intro">
                    <div className="row panel">
                        <div className="col-12 col-sm-1 col-md-1 col-lg-3">

                        </div>
                        <div className="col-12 col-sm-10 col-md-10 col-lg-6 panel-login">

                            <Login checkIfLoged={this.state.login} changeParentLogin={this.changeloger}/>
                            {/*<Table show={this.state.ShowTableManager} data={this.state.Managers}/>*/}
                            {/*<Child callback={this.childCallback()}/>*/}
                            {/*< Test showMenu={this.state.login} />*/}
                            <ShowComponents show={this.state}/>

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
