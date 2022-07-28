import axios from 'axios';


const getUserInfo = async (token, id) => {
    
    const url = `/user/${id}`;
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    }
    try {        
        const resp = await axios.get(url, config)
        if( resp.data ){
            return resp.data.user
        } else {
            console.log('no hay respuesta')
        }
    } catch(err) {
        console.log(`Ocurrio un error  \n${err}`)
        return err
    }
}

export default getUserInfo