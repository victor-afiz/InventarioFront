import React, {Component} from 'react';
import './Add.css';
import {post} from "axios/index";
import FileUpload from '../FileUpload/FileUpload';
class Add extends Component{
    constructor(props){
        super(props);
        this.state ={
            ButtonText: this.props.ButtonText,
            rolID: "",
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
        // const name = e.target.name;
        // const value = e.target.value;
        // this.setState({
        //     [name]: value
        // });
        // this.setState({file:e.target.files[0]})
        console.log(e.target.files);
        console.log(this.state.password);
    };

    handleonFormSubmit = (e) =>
    {
        fetch('/Manager/create/', {
            method: 'POST',
            body: JSON.stringify({
                nickName: this.state.NickName,
                name: this.state.Name,
                photo: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg',
                rolID: this.state.rolIDs,
                password: this.state.password,
                email: this.state.Email
            })
        }).then().catch(err => {
            console.log(err)
        });
    };


    render(){
        return(
            <div className="Anadir" >
                <div className="row">
                    <div className="col-1" >

                    </div>
                    <div className="col-10" >
                        <h3>Añadir Gestor</h3>
                        <form className="forum">
                            <label>Nombre:</label> <input type="text" value={this.state.Name} onChange={this.handleChange} className="form-control" placeholder="Name*"  name="Name"/>
                            <br/>
                            <label>Nickname:</label> <input type="text" value={this.state.NickName} onChange={this.handleChange} className="form-control" placeholder="NickName*" name="NickName"/>
                            <br/>
                            <label>Foto:</label>  <input type="file" onChange={this.onChange} />
                            <br/>
                            <label>Rol</label>
                            <select className="form-control" onChange={this.handleChange} name="rolID">
                                {this.state.allRols}
                            </select>
                            <br/>
                            <label>Email:</label> <input type="email" value={this.state.Email} onChange={this.handleChange} className="form-control" placeholder="Email*" name="Email"/>
                            <br/>
                            <label>Password:</label><input type="password"  value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password*" name="password" />
                            <br/>

                            <button type="button" onClick={this.handleonFormSubmit} className="btn btn-warning btn-lg btn-block">Crear</button>
                            <button disabled={true} type="button" onClick={this.handleChangeParentLoginResult} className="btn btn-warning btn-lg btn-block">Cancelar</button>

                        </form>
                        <FileUpload/>
                    </div>
                    <div className="col-1" >

                    </div>
                </div>
            </div>
        );
    }
}

export default Add;