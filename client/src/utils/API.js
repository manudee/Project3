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


    getRequests: function () {
        return axios.get("/api/createRequest");
    }


}