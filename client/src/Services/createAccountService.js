import axios from 'axios';

const url = '/createaccount'

const createaccount = async (payload) => {
    try {
        const resp = await axios.post(url, payload)
        return resp
    } catch(err){
        console.log(`Ocurrio un error : ${err}`)
    }
}