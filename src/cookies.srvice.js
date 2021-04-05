import axios from "axios";

function getList() {

  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json";

  return axios.get(proxyUrl + targetUrl);
}

function getDetails(url) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, requestOptions)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

export default { getList, getDetails };
