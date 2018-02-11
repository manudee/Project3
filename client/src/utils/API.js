import axios from "axios";


export default {

    createRequest: function (requestInfo) {
        return axios.post('/api/createRequest', requestInfo)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.response)
            });
    },


    createEquipment:function(equipmentInfo){

        return axios.post('/api/createequipment',equipmentInfo)
        .then(response=>{
            console.log(response);
        })
        .catch(error => {
            console.log(error.response)
        });
    },

    getRequests: function () {
        return axios.get("/api/createRequest");
    },


    getEquipment:function(){
        return axios.get('/api/createequipment')
    },

    createUser:function(userInfo){
        return axios.post('/api/createuser',userInfo)
        .then(response=>{
            console.log(response);
        })
        .catch(error => {
            console.log(error.response)
        });
    },

    getUsers:function(){
        return axios.get('/api/createuser')
    },

    updateRequest: function(id,status){
        console.log(status);
        return axios.post('/api/createRequest/'+id,status)
    }

}