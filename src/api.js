import axios from "axios";
const url = "http://localhost:9090/api"

export const getPing = async() => {
    const {data} = await axios.get(url + "/ping");
    return data;
}

export const registrationApi = async(name, email, phone, msg) => {
    const {data} = await axios.post(url + "/registration", {name, email, phone, msg});
    return data;
}


