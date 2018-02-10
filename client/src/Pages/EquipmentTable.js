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

  data : [{
    equipmentId: "",
    equimentName: "",
    quantity: 10
  }]

}


handleUpdate = event => {
  event.preventDefault();
  

}



  render() {
    const data = [{
      equipmentId: '101010',
      equipmentName: 'Laptop',
      quantity: 10
    },
    {
        equipmentId: '202020',
        equipmentName: 'Mouse',
        quantity: 30
    }, {
        equipmentId: '303030',
        equipmentName: 'keyboard',
        quantity: 30
    }

    ]

    const columns = [{
      Header: 'Equipment id',
      accessor: 'equipmentId'


    }, {
      Header: 'Equipment Name',
      accessor: 'equipmentName',
       // Custom cell components!
    }, {
      Header: 'Quantity', // Custom header components!
      accessor: 'quantity'
    },
    {
      Header: 'Update',
      accessor: 'updateAction',
      Cell: () => (<SaveBtn value='Update'/>)
    },
    {
        Header: 'Delete',
        accessor: 'deleteAction',
        Cell: () => (<SaveBtn value='Delete'/>)
      }

]

    return (
      <div>
      <div>
        <SaveBtn value='Create Equipment'/>
       </div> 
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight text-center" /></div>)
  }
}

export default EquipmentTable;