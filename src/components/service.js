const BASE_URL = "https://jsonplaceholder.typicode.com"; //add your base url
const headers = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};
const apiService = {
  getApiData: (endpoint) => {
    return fetch(`${BASE_URL}${endpoint}`)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postApiData: (endpoint, payload) => {
    let options = { ...headers, body: JSON.stringify(payload) }; //payload should be the data which you need to send to api
    return fetch(`${BASE_URL}${endpoint}`, options)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default apiService;
