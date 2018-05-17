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

            return(
                <JsonTable className="table" rows = {this.state.data}/>
            );
    }


}
export default Table;