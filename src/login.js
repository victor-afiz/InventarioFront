import React, { Component } from 'react';
import './login.css';

class login extends Component {
    render() {
        return (

            <div className="login row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <form>
                        <label>
                            Nombre:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Contraseña:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-4">

                </div>
            </div>
        );
    }
}

export default login;
