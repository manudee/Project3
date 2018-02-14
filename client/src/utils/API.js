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

    login: function(logindata){
        console.log("I AM IN LOGIN");
        return axios.post('/api/createuser/login', logindata)
        .then(response => {console.log(response)})
        .catch(error => {
            console.log(error.response)
        });
    },

    createEquipment:function(equipmentInfo){
        console.log("In Createequipment API");
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
    getDetail: function (id) {
        return axios.get("/api/createuser/" + id);
    },

    getEquipment:function(){
        return axios.get('/api/createequipment')
    },

    createUser:function(userInfo){
        
        return axios.post('/api/createuser/signup',userInfo)
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
    updateEquip:function(id,userInfo){
        return axios.put('/api/createequipment/'+id,userInfo)
  },
    updateRequest: function(id,status){
        console.log(status);
        return axios.post('/api/createRequest/'+id,status)
    }

}