const axios = require('axios').default;
const { Path } = require('../config/Path')

const loginUser = async (payLoad) => {
    try {
        if (payLoad) {
            const { data } = await axios.post(`${Path.USER_LOGIN}`, payLoad);
            return data;
        }
        console.log('Unable to find request param');
    } catch (err) {
        console.log(err);
    }
};

export default {
    loginUser
}