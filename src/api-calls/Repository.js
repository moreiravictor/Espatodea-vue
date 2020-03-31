import axios from 'axios'
axios.defaults.baseURL = 'https://espatodeapi.herokuapp.com/';
const base_url = "https://espatodeapi.herokuapp.com";
export default axios.create(base_url);