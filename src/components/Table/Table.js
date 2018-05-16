import  React, { Component } from 'react';

import './Table.css';


class Table extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            td: true,
            checkIfLoged: this.props.checkIfLoged,
            changeParentLogin: ""
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleToggleChangeUser = this.handleToggleChangeUser.bind(this);
        this.handleChangeParentLoginResult = this.handleChangeParentLoginResult.bind(this);

    }

    handleChangeParentLoginResult = () =>{
        const change =this.props.checkIfLoged ? false : true;
        this.props.changeParentLogin( change );

    };

    handleToggleClick() {
        this.setState(prevState => ({
            checkIfLoged: !prevState.checkIfLoged
        }));
    }

    handleToggleChangeUser(){
        this.setState(whoisLogin => ({
            whoisLog: !whoisLogin.whoisLog
        }));
    }

    render() {

            return(
                <div >
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            {this.props.td.map((th) => <th>{th}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table>


                    {console.log(this.props.td)}
                </div>
            );
    }


}
export default Table;