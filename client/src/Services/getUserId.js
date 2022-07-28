import axios from 'axios';

const url = '/userid';

const getUserId = async payload => {
    const config = {
        headers: { Authorization: `Bearer ${payload}`}
    }
    try{
        const resp = await axios.get(url, config)
        
        if(resp.data.userid){
            return resp.data.userid
        } else {
            console.log('no hay respuesta')
        }
    } catch(err){
        console.log(`Ocurrio un error  \n${err}`)
        return err
    }
}

export default getUserId;