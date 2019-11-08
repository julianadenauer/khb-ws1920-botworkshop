// load the puppeteer library
const puppeteer = require('puppeteer');

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

}

// run our function!
generateImage();
