const storage = {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },

  get: (key, parse) => {
    if (parse) return JSON.parse(localStorage.getItem(key));
    else return localStorage.getItem(key);
  },

  remove: key => {
    localStorage.removeItem(key);
  },

  getUser: () => {
    return localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;
  },

  logOut: () => {
    localStorage.removeItem("accessToken");
  },
};

export default storage;
