// load axios module
const axios = require("axios");

var zapierWebhook = "https://hooks.zapier.com/hooks/catch/390512/o449cfy/";
var text = "hey webhook";
var imgUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Strigops_habroptilus_1.jpg";

var requestUrl = zapierWebhook + "?text=" + text + "&image=" + imgUrl;

async function postImage(){
    const response = await axios.get(requestUrl);
    const data = response.data;
    console.log(response);
}

// don't forget to call the function!
postImage();