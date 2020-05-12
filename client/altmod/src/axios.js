import axios from "axios";
axios.defaults.withCredentials = true; // enable axios post cookie, default false

export default () => {
    return axios.create({
        //baseURL: `http://192.168.1.92:8000`
        baseURL: `ec2-3-15-160-9.us-east-2.compute.amazonaws.com:8000`
    });
};
