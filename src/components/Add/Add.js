import React, {Component} from 'react';
import './Add.css';

class Add extends Component{
    constructor(props){
        super(props);
        this.state ={
            ButtonText: this.props.ButtonText,
            SelectRol: "",
            allRols: ''
        };
        let array=[];

        fetch("/Role/", {method: 'GET'})
            .then(res => res.json())
            .then(
                (res) => {

                    const listItems = res.map((number) =>

                        <option key={number}>{number}</option>

                    );
                    this.setState({allRols: listItems});
                },
                (error) => {
                    console.log(error);
                }
            );
    }



    render(){
        return(
            <div className="Anadir" >
            <div className="row">
                <div className="col-1" >

                </div>
                <div className="col-10" >
                <h3>Añadir Gestor</h3>
                    <form className="forum" >

                        <label>Nombre</label> <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" name="email"/>
                        <br/>
                        <label>Rol</label>
                        <select className="form-control" >
                            {this.state.allRols}
                        </select>
                        <br/>
                        <label>Password</label><input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Contraseña*" name="password" />
                        <br/>
                        <button type="button" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">{this.state.ButtonText}</button>
                        <button type="button" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">Cancelar</button>
                        <br/>
                    </form>

                </div>
                <div className="col-1" >

                </div>
            </div>
            </div>
        );
    }
}

export default Add;