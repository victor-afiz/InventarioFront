import  React, { Component } from 'react';

import './Table.css';

const JsonTable = require('ts-react-json-table');

class Table extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data

        };


    }



    render() {
        console.log(this.state.data);

            return(
               // <JsonTable className="table" rows={this.state.data}/>
                <div>
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
                        {this.state.data.map((value) => <tr key={value}>

                            <td>
                                <div id="foto-dentro">
                                    <img src={value.Photo} className="rounded img-fluid"/>
                                </div>
                            </td>
                            <td>{value.NickName}</td>
                            <td>{value.Name}</td>
                            <td>{value.Email}</td>
                            <td id="pequenho">
                                    <div className="row">
                                        <div className="col-6">
                                            <button id="centro" className="btn"><i class="fas fa-user-edit"></i></button>
                                        </div>
                                        <div className="col-6">
                                            <button id="centro" className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div>

                            </td>

                        </tr>)}
                        </tbody>
                    </table>
                </div>

            );
    }


}
export default Table;