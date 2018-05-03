import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
            <div className="row login">
                <div className="col-1">

                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-7 panel">
                            <hr/>
                        </div>
                        <div className="col-5 form-group">
                            <form className="forum">
                                <input type="text" placeholder="Nombre"  name="name" />
                                <br/>
                                <input type="password" placeholder="Contraseña" name="name" />
                                <input type="submit" class="btn btn-warning btn-block" value="Entrar" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-1">

                </div>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
