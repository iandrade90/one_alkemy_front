import axios from "axios";
import config from "../config";

axios.defaults.headers["Authorization"] = localStorage.getItem("token_id")
  ? `Bearer ${localStorage.getItem("token_id")}`
  : "";

const getAllService = async (path) => {
  const response = await axios.get(`${config.base_server_path}${path}`);
  return response;
};

const postService = async (path, body) => {
  const response = await axios.post(`${config.base_server_path}${path}`, body);
  return response;
};

const deleteService = async (path, body) => {
  const response = await axios.delete(
    `${config.base_server_path}${path}`,
    body
  );
  return response;
};

const putService = async (path, body) => {
  const response = await axios.put(`${config.base_server_path}${path}`, body);
  return response;

}

export { getAllService, postService, putService, deleteService };
