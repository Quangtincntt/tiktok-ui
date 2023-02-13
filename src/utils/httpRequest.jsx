import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export default httpRequest;

export const get = async (path, option = {}) => {
  const res = await httpRequest.get(path, option);
  return res.data;
};

axios
  .get("https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1")
  .then((res) => {
    console.log(res.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
