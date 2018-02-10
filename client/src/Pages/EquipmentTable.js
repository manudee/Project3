import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {SaveBtn} from "../components/Button/SaveBtn.js";
import API from "../utils/API";

class EquipmentTable extends Component {

  componentDidMount() {
    this.loadEquipments();
  }


loadEquipments = () => {
  API.getEquipment()
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
}





  state = {

    data: [{
      equipmentDesc: "",
      brand: "",
      quantity: ""
    }]

  }


  handleUpdate = event => {
    event.preventDefault();
    console.log("I AM In handleupdate");

    var equipmentInfo = {};

    equipmentInfo.equipmentDesc = this.state


  }


  handleDelete = event => {
    event.preventDefault();
    console.log("I AM In handleDelete");

    var equipmentInfo = {};




  }


  handleCreateEquipment = event => {
    event.preventDefault();
    console.log("In handleCreate Equipment")

  }



  render() {
    const data = [{
      equipmentDesc: '101010',
      brand: 'Laptop',
      quantity: 10
    },
    {
      equipmentDesc: '202020',
      brand: 'Mouse',
      quantity: 30
    }, {
      equipmentDesc: '303030',
      brand: 'keyboard',
      quantity: 30
    }

    ]

    const columns = [{
      Header: 'Equipment Description',
      accessor: 'equipmentDesc'


    }, {
      Header: 'Brand',
      accessor: 'brand',
      // Custom cell components!
    }, {
      Header: 'Quantity', // Custom header components!
      accessor: 'quantity'
    },
    {
      Header: 'Update',
      accessor: 'updateAction',
      Cell: () => (<SaveBtn onClick={this.handleUpdate} value='Update' />)
    },
    {
      Header: 'Delete',
      accessor: 'deleteAction',
      Cell: () => (<SaveBtn onClick={this.handleDelete} value='Delete' />)
    }

    ]

    return (
      <div>
        <div>
          <SaveBtn onClick={this.handleCreateEquipment} value='Create Equipment' />
        </div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight text-center" /></div>)
  }
}

export default EquipmentTable;