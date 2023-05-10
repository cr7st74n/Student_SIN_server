import axios from "axios"

let base_url = "/api/students"

export default {
    getAllStudents(){
        return axios.get(base_url).then(response =>{
            return response.data
        })
    },
    addStudents(student){
        return axios.post(base_url, student).then(response =>{
            return response.data
        })
    }

}