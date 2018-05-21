import React, { Component } from 'react';
import FaGroup from 'react-icons/lib/fa/group';
import FaUser from 'react-icons/lib/fa/user';
import FaList from 'react-icons/lib/fa/list';
import FaArchive from 'react-icons/lib/fa/archive';
import { Icon } from 'react-icons-kit'
import {tshirt} from 'react-icons-kit/ionicons/tshirt'


class Menu extends Component
{
    constructor(props){
        super(props)
        this.state ={
            menuSelected: ""
        }
    }
    handleOperation = (valor) =>{
        let ElementSelected= valor.target.innerText;
        this.setState({menuSelected: ElementSelected});
        this.props.menuSelected(this.state.menuSelected);
    };



    render(){
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                           <FaUser/> Gestores
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={this.handleOperation} >Añadir Gestor Nuevo</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Modificar Gestor</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Eliminar Gestor</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Listado Gestores</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                            <Icon icon={tshirt} />Prendas
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={this.handleOperation} >Añadir Prenda Nuevo</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Modificar Prenda</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Eliminar Prenda</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Listado Prendas</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                            <FaList/>   Pedidos
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={this.handleOperation} >Nuevo Pedido</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Modificar Pedido</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Eliminar Pedido</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Listado Pedidos</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                            <FaArchive/>  Stock
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={this.handleOperation} >Añadir Stock</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Listado Stock</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                            <FaGroup/>  Gestionar Empleados
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={this.handleOperation} >Añadir Usuario</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Modificar Usuario</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Eliminar Usuario</a>
                            <a className="dropdown-item" onClick={this.handleOperation} >Listado Usuario</a>
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }

}

export default Menu;