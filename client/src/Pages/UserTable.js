import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {SaveBtn} from "../components/Button/SaveBtn.js";

class UserTable extends Component {
  render() {
    const data = [{
      Reqid: '101010',
      equipment: 'Laptop',
      Description: 'This is a laptop request'
    },
    {
      Reqid: '202020',
      equipment: 'Mouse',
      Description: 'This is a Mouse request'
    }, {
      Reqid: '202020',
      equipment: 'Mouse',
      Description: 'This is a Mouse request'
    }

    ]

    const columns = [{
      Header: 'Reqid',
      accessor: 'Reqid'


    }, {
      Header: 'equipment',
      accessor: 'equipment'
    }, {
      Header: 'Description',
      accessor: 'Description'
    },
    {
      Header: 'Action',
      accessor: 'Action',
      Cell: () => (<SaveBtn value='Return'/>)
    }]

    
    return (
      <div>
      <div>
        <SaveBtn value='Create Request'/>
       </div> 
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight text-center" /></div>)
  }
}

export default UserTable;