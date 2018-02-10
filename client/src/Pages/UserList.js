import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import API from "../utils/API";

class UserList extends Component {



    // state = {

    //     users = []

    // }


    componentDidMount() {
        this.loadEquipments();
      }
    
    
    loadEquipments = () => {
      API.getUsers()
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    }


    render() {

        const data = [{
            username: 'Manasi'

        },
        {
            username: 'Abhijit'

        },
        {
            username: 'Brian'
        },
        {
            username: 'Ted'
        }]




        const columns = [{
            Header: 'username',
            accessor: 'username'
        },

        {
            Header: 'Delete',
            accessor: 'deleteAction',
            Cell: () => (<SaveBtn value='Delete User' />)
        }

           
        ]

    return(
            <div>
    <div>
        <SaveBtn value='Create User' />
    </div>
    <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight text-center" /></div>)
    }


}


export default UserList;