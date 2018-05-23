import  React, { Component } from 'react';

import './Table.css';
import Modal from '../Modal/Modal';

class Table extends Component
{
    constructor(props) {
        super(props);
        let man = "";

        this.state = {
            data: this.props.data,
            show: true,
            deletModal: "deletManager",
            managerSelectedID: '',
            modalMessage: '',
            deletManager: false
        };
        this.setState({show: this.props.show});
        console.log("table",this.props.show);
        console.log('0e');
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
            )
    }

    handleSetSelectedManager = (value) =>{
            const managerSelected = JSON.parse(value.target.name);

            this.setState({
                modalMessage: "Esta seguro de que desea eliminar a: "+managerSelected.Name,
                managerSelectedID: managerSelected.ID
            });

            console.log(this.state.modalMessage);
            if(this.state.deletManager) {

            }
    };

    handleDeletSelectedManager = () =>{
        console.log(this.state.managerSelectedID)
        fetch('/Manager/delete/', {
            method: 'POST',
            body: JSON.stringify({
                id : this.state.managerSelectedID
            })
        }).then().catch(err => {
            console.log(err)
        });
    };


    render() {

        if(this.state.show){
            return(

                <div>
                     <Modal ModalTitle={"Eliminar Manager "} Operation={this.handleDeletSelectedManager} ModalDescription={this.state.modalMessage} dataTarget={this.state.deletModal}/>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th className="text-center">Photo</th>
                            <th>NickName</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
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
                            <td id="pequenho">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button"  data-toggle="modal" data-target={'#'+this.state.deletModal} className="btn centro fas fa-user-edit"></button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button"  data-toggle="modal" onClick={this.handleSetSelectedManager} name={JSON.stringify(value)}   data-target={'#'+this.state.deletModal} className="btn btn-danger centro fas fa-trash-alt"></button>
                                    </div>
                                </div>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>

                </div>

            );
        }else {
            return null;
        }

    }


}
export default Table;