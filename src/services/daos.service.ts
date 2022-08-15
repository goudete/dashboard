import axios from "axios"

const API_URL = 'https://new-brex-core.herokuapp.com'

export const getAllDaos = (): Promise<any> => {
  return axios.get(`${API_URL}/daos`)
    .then(resp => resp.data);
}