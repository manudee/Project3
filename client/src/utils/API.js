import axios from "axios";


export default {

    createRequest: function (requestInfo) {

        // console.log(" I Am IN API");
        //saves incoming user req data to DB
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
        console.log("I am in API")
        return axios.get('/api/createequipment')
    },

    createUser:function(userInfo){
        console.log("In CreateUser API");
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
    }

}