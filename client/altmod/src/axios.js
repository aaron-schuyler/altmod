import axios from "axios";
axios.defaults.withCredentials = true; // enable axios post cookie, default false

export default () => {
    return axios.create({
        baseURL: `http://localhost:8000`
        //baseURL: `http://ec2-3-15-160-9.us-east-2.compute.amazonaws.com:8000`
    });
};
