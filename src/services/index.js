import axios from "axios";

//config access token
 axios
 .defaults
 .headers['Authorization'] = localStorage.getItem("token_id")
 ?`Bearer ${localStorage.getItem("token_id")}` 
 :'';


const getAllService = async (path , cancelToken )=> {

    const response = await axios
        .get(`${process.env.REACT_APP_BASE_PATH_SERVER}${path}`, {
            cancelToken: cancelToken?.token,
        });
    return response;
};

const postService = async (path , body , cancelToken )=> {
    const response = await axios
        .post(
            `${process.env.REACT_APP_BASE_PATH_SERVER}${path}`, {
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