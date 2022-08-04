import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/'


function signUp (userData) {
const promise = axios.post(`${BASE_URL}/sign-up`, userData)
console.log(userData)
return promise
}


export {signUp}