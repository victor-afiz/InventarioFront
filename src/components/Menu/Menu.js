import React, { Component } from 'react';
import FaHome from 'react-icons/lib/fa/home';
import FaGroup from 'react-icons/lib/fa/group';
import FaUser from 'react-icons/lib/fa/user';
import FaList from 'react-icons/lib/fa/list';
class Menu extends Component
{

    render(){
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                           <FaUser/> Gestores
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Gestor Nuevo</a>
                            <a className="dropdown-item" href="#">Modificar Gestor</a>
                            <a className="dropdown-item" href="#">Eliminar Gestor</a>
                            <a className="dropdown-item" href="#">Listado Gestores</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                             Prendas
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Prenda Nuevo</a>
                            <a className="dropdown-item" href="#">Modificar Prenda</a>
                            <a className="dropdown-item" href="#">Eliminar Prenda</a>
                            <a className="dropdown-item" href="#">Listado Prendas</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <FaList/>   Pedidos
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Nuevo Pedido</a>
                            <a className="dropdown-item" href="#">Modificar Pedido</a>
                            <a className="dropdown-item" href="#">Eliminar Pedido</a>
                            <a className="dropdown-item" href="#">Listado Pedidos</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Stock
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Stock</a>
                            <a className="dropdown-item" href="#">Listado Stock</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <FaGroup/>  Gestionar Empleados
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Usuario</a>
                            <a className="dropdown-item" href="#">Modificar Usuario</a>
                            <a className="dropdown-item" href="#">Eliminar Usuario</a>
                            <a className="dropdown-item" href="#">Listado Usuario</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default Menu;