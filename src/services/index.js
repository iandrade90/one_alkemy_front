import axios from "axios";
import config from '../config'

 axios
 .defaults
 .headers['Authorization'] = localStorage.getItem("token_id")
 ?`Bearer ${localStorage.getItem("token_id")}` 
 :'';

const getAllService = async (path , cancelToken )=> {
    const response = await axios
        .get(`${config.base_server_path}${path}`, {
            cancelToken: cancelToken?.token,
        });
    return response;
};

const postService = async (path , body , cancelToken )=> {
    const response = await axios
        .post(
            `${config.base_server_path}${path}`, {
                cancelToken: cancelToken?.token
            },
            body,
        )  
    return response;
}

export {
    getAllService,
    postService
}