import React, {Component} from 'react';
import axios, { post } from 'axios';

import './EditManager.css';

class EditManager extends Component{
    constructor(props){
        super(props);
        this.state ={
            file:null,
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
                    //CURRENT_MANAGER
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            file:e.target.files[0]
        });
        console.log(this.state.email);
        console.log(this.state.password);

    };

    handleonFormSubmit = (e) => {
        // e.preventDefault() // Stop form submit
        // this.fileUpload(this.state.file).then((response)=>{
        //     console.log(response.data);
        // })
        console.log(this.props.ManagerSelected);
    };

    fileUpload = (file) => {
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    };

    render(){
        return(

                <div className="EditManager" >
                    <div className="row">
                        <div className="col-1" >

                        </div>
                        <div className="col-10" >
                            <h3>Añadir Gestor</h3>
                            <form className="forum">
                                <label>Nombre:</label> <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" name="email"/>
                                <br/>
                                <label>Nickname:</label> <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" name="email"/>
                                <br/>
                                <label>Foto:</label>  <input type="file" onChange={this.onChange} />
                                <br/>
                                <label>Rol</label>
                                <select className="form-control" >
                                    {this.state.allRols}
                                </select>
                                <br/>
                                <label>Nickname:</label> <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email*" id="email" name="email"/>
                                <br/>
                                <label>Password:</label><input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Contraseña*" name="password" />
                                <br/>

                                <button type="button" onClick={this.handleonFormSubmit} className="btn btn-warning btn-lg btn-block">Modificar</button>
                                <button type="button" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">Cancelar</button>

                            </form>
                        </div>
                        <div className="col-1" >

                        </div>
                    </div>
                </div>
        );
    }
}

export default EditManager;