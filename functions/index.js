const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
var axios = require("axios");
const cors = require("cors")({ origin: true });

exports.getUserFromHumanity = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send("ok");
    // var user = {};
    // var inout = {};
    // var token = "";
    // var payload = {
    //   client_id: "0cbaa9173943569cad4c0b8267981147bac0cf5d",
    //   client_secret: "be6a34d0830ab6fb3db837958d50faace249e0d1",
    //   grant_type: "password",
    //   username: "ash@andrewscarpetcleaning.com",
    //   password: "sugarlips42",
    //   redirect_uri: "http://47.219.112.177"
    // };

    // var querystring = require("querystring");
    // axios
    //   .post(
    //     "https://www.humanity.com/oauth2/token.php",
    //     querystring.stringify(payload)
    //   )
    //   .then(response => {
    //     token = response.data.access_token;
    //     return axios.get(
    //       `https://www.humanity.com/api/v2/employees?access_token=${token}`
    //     );
    //   })
    //   .then(response => {
    //     for (var value of response.data.data) {
    //       if (value.email === req.body.email) {
    //         user = value;
    //         console.log(value.id);
    //         return axios.get(
    //           `https://www.humanity.com/api/v2/timeclocks/status/${
    //             value.id
    //           }/1?access_token=${token}`
    //         );
    //       }
    //     }
    //     res.status(400).send("user not found");
    //   })
    //   .then(response => {
    //     console.log(response);

    //     inout = response;
    //     user.clockedIn = inout.data.data;
    //     console.log(inout.data.data);
    //     //
    //     res.status(200).send(user);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     res.status(400);
    //   });
    // response.status(200).send({ test: "Testing functions" });
  });
});
