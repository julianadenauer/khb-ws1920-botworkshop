// load the puppeteer library
const puppeteer = require('puppeteer');
const axios = require("axios");
const scp = require('scp'); // get the copy module

var options = {
  file: './downloads/image.jpg',
  user: 'XXX',
  host: 'XXX',
  port: '22',
  path: '~/html/upload/julian',
  password: 'XXX'
}

var zapierWebhook = "https://hooks.zapier.com/hooks/catch/390512/o449cfy/";
var text = "we generated a new image!";
var imgUrl = "https://m4f.uber.space/upload/3/image.jpg";

var requestUrl = zapierWebhook + "?text=" + text + "&image=" + imgUrl;

async function generateImage(){
    // launch our chromium browser and let us see what is happening
    const browser = await puppeteer.launch();

    // open a new tab
    const page = await browser.newPage();

    // open our local html file, we don't need to run a server
    await page.goto('https://m4f.uber.space/02-generating-images/', {timeout: 60000});

    // set the download location
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: __dirname + '/downloads' });

    // wait a second so our p5js sketch has some time to draw
    await page.waitFor(1000);

    // hit the 's' key to let p5js init a download
    await page.keyboard.press('s');

    // wait for the download to complete
    await page.waitFor(1000);

    // close the browser
    await browser.close();

    // upload the file to our server
    scp.send(options, function (err) {
      if (err) console.log(err);
      else console.log('File transferred.');
    });

    // activate our zap!
    const response = await axios.get(requestUrl);
    const data = response.data;
    console.log(response);
}

// run our function!
generateImage();
