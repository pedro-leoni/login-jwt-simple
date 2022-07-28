import axios from "axios";

const url = '/userid';

const apiAuth = async payload => {
    const config = {
        headers: { Authorization: `Bearer ${payload}`}
    }
    try {
        const resp = await axios.get(url, config)
        console.log('resp del back -> ', resp)
        if(resp.data.userid){
            return true
        } else {
            return false
        }
    } catch(err){
        return false
    }
}

export default apiAuth;