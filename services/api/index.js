import axios from "axios";

const facade = {};

const api = axios.create({ baseURL: "https://picsum.photos" });

facade.request = config => api.request(config);
["get", "head"].forEach(method => {
  facade[method] = (url, config) => facade.request({ ...config, method, url });
});
["delete", "post", "put", "patch"].forEach(method => {
  facade[method] = (url, data, config) =>
    facade.request({ ...config, method, url, data });
});

class API {
  static fetchAllProducts() {
    return facade.get("/list");
  }
}

export default API;
