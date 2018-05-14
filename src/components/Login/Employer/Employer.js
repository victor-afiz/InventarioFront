import  React, { Component } from 'react';

import './Employer.css';

class Employer extends Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return(

                <div id="menu1" className="container tab-pane active form-group">
                    <form className="forum">
                        <input type="email"  className="form-control" placeholder="Email*" id="email" />
                        <br/>
                        <input type="password" className="form-control" placeholder="Contraseña*" name="name" />
                        <br/>
                        <input type="submit" onPress={this.handleClick} className="btn btn-warning btn-block" value="Entrar" />
                        <br/>
                    </form>
                </div>
        );

    }
}
export default Employer;
