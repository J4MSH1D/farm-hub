const storage = {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },

  get: key => {
    return localStorage.getItem(key);
  },

  remove: key => {
    localStorage.removeItem(key);
  },

  getUser: () => {
    return localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null;
  },

  logOut: () => {
    localStorage.removeItem("accessToken");
  },
};

export default storage;
