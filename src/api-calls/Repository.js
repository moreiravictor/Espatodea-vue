import axios from 'axios'
axios.defaults.baseURL = 'https://espatodeapi.herokuapp.com/';
export default axios.create();