import axios from 'axios-https-proxy-fix'

const instance = axios.create({
    baseURL: 'https://api.culturetesting.online/api',
})

export default instance