import axios from "axios";

export default axios.create({
    baseURL: 'http://billeteraapirest.test/api/v1/'
});