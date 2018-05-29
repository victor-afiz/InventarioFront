import React, {Component} from 'react';
import axios, { post } from 'axios';

import './EditManager.css';

class EditManager extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            file:null,
            ButtonText: this.props.ButtonText,
            SelectRol: "",
            allRols: '',
            Name: '',
            NickName: '',
            Email: '',
            password: ''
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

    handleChange = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.Email);
        console.log(this.state.password);

    };

    handleonFormSubmit = (e) =>
    {
        fetch('/Manager/update/', {
            method: 'POST',
            body: JSON.stringify({
                id: this.props.ManagerSelected.id,
                nickName :this.state.NickName,
                name : this.state.Name,
                photo : this.state.file,
                rolID : "CURfRENT MANAGER",
                password : this.state.password,
                email : this.state.Email
            })
        }).then().catch(err => {
            console.log(err)
        });
    };

    fileUpload = (file) =>
    {
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
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
                                <label>Nombre:</label> <input type="text" value={this.state.Name} onChange={this.handleChange} className="form-control" placeholder={this.props.ManagerSelected.Name}  name="Name"/>
                                <br/>
                                <label>Nickname:</label> <input type="text" value={this.state.NickName} onChange={this.handleChange} className="form-control" placeholder={this.props.ManagerSelected.NickName} name="NickName"/>
                                <br/>
                                <label>Foto:</label>  <input type="file" onChange={this.onChange} />
                                <br/>
                                <label>Rol</label>
                                <select className="form-control" >
                                    {this.state.allRols}
                                </select>
                                <br/>
                                <label>Email:</label> <input type="email" value={this.state.Email} onChange={this.handleChange} className="form-control" placeholder={this.props.ManagerSelected.Email} name="Email"/>
                                <br/>
                                <label>Password:</label><input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder={this.props.ManagerSelected.password} name="password" />
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