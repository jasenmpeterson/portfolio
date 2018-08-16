const Prismic = require("prismic-javascript");
const apiEndpoint =
  "https://cors-anywhere.herokuapp.com/https://jasenmportfolio.cdn.prismic.io/api/v2";
const apiToken =
  "MC5XM09JY2lZQUFESEJMNUUx.77-977-977-9FXjvv70677-977-977-9VVQW77-9RSAML--_ve-_ve-_ve-_vT3vv73vv73vv71x77-9AS_vv71g";

export default {
  getPages(cb) {
    Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(function(api) {
        return api.query("");
      })
      .then(function(response) {
        cb(response.results);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
