
import axios from "axios"
axios.get('../App/data/data.json')
  .then(function (response) {
    // handle success
    console.table(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
