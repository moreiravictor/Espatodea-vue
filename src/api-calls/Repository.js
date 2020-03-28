import axios from 'axios'
axios.defaults.baseURL = '//localhost:8081/';
const base_url = "http://localhost:8081";
export default axios.create(base_url);