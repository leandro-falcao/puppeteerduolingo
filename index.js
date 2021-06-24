
const puppeteer = require('puppeteer');
const { setTimeout } = require('timers');
 
// let scrape = async () => {

//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage()
//   await page.goto('http://books.toscrape.com/')
//   await page.waitFor(6000)
//   // Scrape
//   browser.close()
//   return result


//   setInterval(() => {
//     let num = 1
//     console.log(num++);
// }, 1000);
// };


// scrape().then((value) => {
//     console.log(value) // sucesso!

//     console.log('sucesso');

//     setInterval(() => {
//         let num = 1
//         console.log(num = num + 1);
//     }, 1000);
// });



const navegador = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://pt.duolingo.com/');
  await page.screenshot({ path: 'duo.png' });


  const dimensions = await page.evaluate(function(){
    // let bosy = document.getElementsByClassName('_3uMJF')[0].outerHTML;
    let bosy = document.querySelector('._3uMJF').outerHTML;
    
    const acessarContaF = function(){
      
      let acessarConta = document.querySelector('._3uMJF a').click();
      setTimeout(() => {
        let dadosLoginEmail = document.querySelectorAll('div._2rjZr input._3MNft.fs-exclude')[0].value = "leandrofalcaoti@gmail.com";
        let dadosLoginPassword = document.querySelectorAll('div._2rjZr input._3MNft.fs-exclude')[1].value = `k11l12kl88192288`
        setTimeout(() => {
          let dadosLoginClick = document.querySelectorAll('button._2oW4v')[0].click()
        }, 955);
        
      }, 1555);
      
      
      //  let acessarContaEmail = document.querySelector('._3MNft')
      //     acessarContaEmail.innerText = 'lasdsad'
        
      //  let acessarContaEmailClick = acessarContaEmail.click();
      //  console.log(acessarContaEmail);

      // let acessarContaSenha = document.querySelector('._3uMJF a').click();

      return acessarConta
    }
    // let acessarConta = document.getElementsByClassName('_3uMJF')[0].click();
    let bos = bosy.outerHTML;
    return {
      acesso: acessarContaF(),

      corpo: bosy,

      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);

  await setTimeout(function(){
    browser.close();
  }, 52666);
};

setTimeout(() => {
  navegador()
}, 666);


