
import axios from "axios"
axios.get('https://port19x.github.io/mensascrap/master.json')
  .then(function (response) {
    // handle success
    console.table(response.data.body.erzbergerstraße.monday);
    console.table(response.data.body.erzbergerstraße.tuesday);
    console.table(response.data.body.erzbergerstraße.wednesday);
    console.table(response.data.body.erzbergerstraße.thursday);
    console.table(response.data.body.erzbergerstraße.friday);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
