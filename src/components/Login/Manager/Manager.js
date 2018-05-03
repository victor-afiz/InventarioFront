import  React, { Component } from 'react';

import './Manager.css';

class Manager extends Component
{
    render() {
        return(
                <div id="menu2" className="container tab-pane fade form-group">
                    <form className="forum">
                        <input type="email" className="form-control" placeholder="Email*" id="email" />
                        <br/>
                        <input type="password" className="form-control" placeholder="Contraseña*" name="name" />
                        <br/>
                        <input type="submit" className="btn btn-warning btn-block" value="Entrar" />
                    </form>
                </div>
        );

    }
}

export default Manager;