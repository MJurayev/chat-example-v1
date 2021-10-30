import instance from 'axios'
import config from '../config/config'
const token = window.localStorage.getItem('x-auth-token')
const headers = {
  ...(token && {"x-auth-token":token})
}

const axios = instance.create({
    baseURL: config.API,
    headers:headers
  });

export { axios }