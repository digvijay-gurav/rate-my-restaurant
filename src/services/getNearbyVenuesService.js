import axios from "axios";

export const getNearByVenueService = (zip, callback) => {
    axios.get('https://api.foursquare.com/v2/venues/explore', {
        params: {
          client_id:'5QRW0WLVC2YZHSGDWQXMRI1FVVYFMVMZDEQNLD03FXD5KMWY',
          client_secret:'RVQTS1I0YSZ4YD4VMB532K0VSI2EMHJOLAVTQ0FOSFLNXWUF',
          query:'lunch',
          near:zip,
          v:20190724,
          limit:3
        }
      }).then(response => {
        callback(response);
      }).catch(err =>{
        console.log(err);
      })
}