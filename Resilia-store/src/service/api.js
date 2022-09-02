import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://localhost:3300'
})

export async function getProdutos(){
    const response = await api.get('./produtos')
    console.log(response);
    return response.data.produtos
}
