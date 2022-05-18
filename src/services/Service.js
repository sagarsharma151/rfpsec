import axios from 'axios'
import { BaseUrl } from './BaseurlConst';


const service = axios.create({
    baseURL: BaseUrl,
    timeout: 60000
  })

  export default service;