const API = import.meta.env;

const config = {
  api: {
    base_url: API.VITE_BASE_URL,
    file_url: API.VITE_BASE_URL + "/file-service/",
  },
};

export default config;
