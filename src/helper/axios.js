import _axios from "axios"

const instance = _axios.create({
    baseURL: process.env.REACT_APP_URL //JSON-Server端口位置
});

export default instance