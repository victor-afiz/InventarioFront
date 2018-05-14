import  React, { Component } from 'react';

import './Manager.css';

class Manager extends Component
{
    constructor()
    {
        super()
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }
        this.handleClick = this.handleClick.bind(this);

    }

    render() {
        return(
                <div id="menu2" className="container tab-pane fade form-group">
                    <form className="forum">
                        <input type="email" className="form-control" value={this.state.value1} placeholder="Email*" id="email" />
                        <br/>
                        <input type="password" className="form-control" value={this.state.value1} placeholder="Contraseña*" name="name" />
                        <br/>
                        <input type="submit" onPress={handlePrint} className="btn btn-warning btn-block" value="Entrar" />
                        <br/>
                    </form>
                </div>
        );

    }
}

export default Manager;