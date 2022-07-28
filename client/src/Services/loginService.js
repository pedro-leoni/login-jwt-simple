import axios from 'axios';

const url = '/login';

const login = async payload => {
    try {
        const resp = await axios.post(url, payload)
        return resp.data.token
    } catch(err){
        console.log(`Ocurrio un error : ${err}`)
        return err
    }
}

export default login;