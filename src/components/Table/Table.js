import  React, { Component } from 'react';

import './Table.css';
import Modal from '../Modal/Modal';
import EditManager from '../EditManager/EditManager';
class Table extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            EditManager: false,
            SelectedManagerData: null,
            deletModal: "deletManager",
            managerSelectedID: '',
            modalMessage: '',
            deletManager: false,
            back: true
        };
    }

    componentDidMount = () =>
    {
        fetch("/Manager/", {method: 'GET'})
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        data: res
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    };

    handleSetSelectedManager = (value) =>
    {
            const managerSelected = JSON.parse(value.target.name);
            this.setState({
                modalMessage: "Esta seguro de que desea eliminar a: "+managerSelected.Name,
                managerSelectedID: managerSelected.ID
            });
            console.log(this.state.modalMessage);
    };

    handleEditManager = (value) =>
    {
        const managerSelected = JSON.parse(value.target.name);
        this.setState({
            EditManager: true,
            back: false
        });
        this.setState({SelectedManagerData: managerSelected});
    };

    handleDeletSelectedManager = () =>
    {
        console.log(this.state.managerSelectedID)
        fetch('/Manager/delete/', {
            method: 'POST',
            body: JSON.stringify({
                id : this.state.managerSelectedID
            })

        }).then().catch(err => {
            console.log(err)
        });
        this.componentDidMount();
    };


    render() {


        if(this.state.data && this.state.back){

                return(

                    <div>

                        <Modal ModalTitle={"Eliminar Manager "} Operation={this.handleDeletSelectedManager} ModalDescription={this.state.modalMessage} dataTarget={this.state.deletModal}/>
                        <table className="table ">
                            <thead>
                            <tr>
                                <th className="text-center">Photo</th>
                                <th>NickName</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map((value) =>

                                <tr key={value.ID}>
                                    <td>
                                        <div id="foto-dentro">
                                            <img alt='img' src={value.Photo} className="rounded img-fluid"/>
                                        </div>
                                    </td>
                                    <td hidden>{value.ID}</td>
                                    <td>{value.NickName}</td>
                                    <td>{value.Name}</td>
                                    <td>{value.Email}</td>
                                    <td >
                                        <button type="button"  onClick={this.handleEditManager}  name={JSON.stringify(value)}   data-target={'#'+this.state.deletModal} className="btn centro fas fa-user-edit"></button>

                                        <button type="button"  data-toggle="modal" onClick={this.handleSetSelectedManager} name={JSON.stringify(value)}   data-target={'#'+this.state.deletModal} className="btn btn-danger centro fas fa-trash-alt"></button>

                                    </td>
                                </tr>)}
                            </tbody>

                        </table>

                    </div>

                );


        }else if (this.state.EditManager) {
            return(
                <div>
                <EditManager ManagerSelected={this.state.SelectedManagerData}/>
                </div>
            )
        }else {
            return (
                <table className="table ">
                    <thead>
                    <tr>
                        <th className="text-center">Photo</th>
                        <th>NickName</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

            );
        }

    }


}
export default Table;