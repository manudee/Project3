import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import Chat from "../components/Chat/Chat.js";

class ManagerTable extends Component {

    render() {
        const data = [{
            Reqid: '101010',
            userName: 'Manasi',
            equipment: 'Laptop',
            Description: 'This is a laptop request',
            Quantity: 10,
            Justification: 'This is a laptop request for Manasi'
        },
        {
            Reqid: '202020',
            userName: 'Abhijit',
            equipment: 'Mouse',
            Description: 'This is a Mouse request',
            Quantity: 10,
            Justification: 'This is a laptop request for Abhijit'
        }, {
            Reqid: '202020',
            userName: 'Brian',
            equipment: 'PC',
            Description: 'This is a PC request',
            Quantity: 10,
            Justification: 'This is a PC request for Brian'
        },

        {
            Reqid: '202020',
            userName: 'Ted',
            equipment: 'Monitor',
            Description: 'This is a Monitor request',
            Quantity: 10,
            Justification: 'This is a Monitor request for Ted'
        }
        ]

        const columns = [{
            Header: 'Reqid',
            accessor: 'Reqid'


        }, {
            Header: 'userName',
            accessor: 'userName',
          
        },
        {
            Header: 'equipment',
            accessor: 'equipment',
          
        }, {
            Header: 'Description', // Custom header components!
            accessor: 'Description'
        },
        {
            Header: 'Quantity', // Custom header components!
            accessor: 'Quantity'
        },
        {
            Header: 'Justification', // Custom header components!
            accessor: 'Justification'
        },
        {
            Header: 'Action',
            accessor: 'Action',
            Cell: () => (<SaveBtn value='Approve' />)
        }]

        return (
            <div>
                <div className="row">
                    <SaveBtn value='Create Request' />
                    <SaveBtn value='Create User' />
                    <SaveBtn value='All Users' />
                    <SaveBtn value='All Equipments' />
                </div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight text-center" />
                {/*Chat element from Socket io*/}
                <div>
                    <Chat/>
                </div>
            </div>)
    }
}

export default ManagerTable;