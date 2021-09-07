import axios from "axios";

const getAllService = async (path , cancelToken )=> {

    const userToken = localStorage.getItem("token_id");
    
    const response = await axios
        .get(`${process.env.REACT_APP_SERVERBASEPATH}/${path}`, {
            cancelToken: cancelToken?.token,
            headers:{
                authorization : userToken ? userToken : "" 
            }
        })
        .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                return thrown.message;
            } else {
                return  thrown.message;
            };
        });
    return {
        response
    }
};


const postService = async (path , body , cancelToken )=> {

    const userToken = localStorage.getItem("token_id");

    const response = await axios
        .post(`${process.env.REACT_APP_SERVERBASEPATH}/${path}`, {
            cancelToken: cancelToken?.token,
            body:JSON.stringify(body),
            headers:{
                authorization : userToken ? userToken : "" 
            }
        })
        .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                return thrown.message;
            } else {
                return  thrown.message;
            };
        });
    return {
        response,
    }
}

export {
    getAllService,
    postService
}