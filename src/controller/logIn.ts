import axios from "axios";

const apiUrl = `https://65466266fe036a2fa9559a14.mockapi.io/fbUsers`;

export function logInFn(data:object){
    return axios.post(apiUrl, data)
}