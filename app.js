document.addEventListener('DOMContentLoaded', () => {

      let youDoWantTo = document.querySelector('#yes');
      youDoWantTo.addEventListener('click', () => {
            document.getElementById('music').play();
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'grid';
      })

      let youDoWantTo = document.querySelector('#no')
      youDoWantTo.addEventListener('click', () => {
            window.location.href= 'https://www.amc.com/shows/the-walking-dead--119';
      })

      let turnToPage3 = document.getElementById('introtalk1')
      turnToPage3.addEventListener('click', () => {
            document.getElementById('page2').style.display = 'none';
            document.getElementById('page3').style.display = 'grid';
      })

      let turnToPage4 = document.getElementById('introtalk2')
      turnToPage4.addEventListener('click', () => {
            document.getElementById('page3').style.display = 'none';
            document.getElementById('page4').style.display = 'grid';
      })

      let turnToPage5 = document.getElementById('introtalk3')
      turnToPage5.addEventListener('click', () => {
            document.getElementById('page4').style.display = 'none';
            document.getElementById('page5').style.display = 'grid';
      })

      let wordsetarr = ['rick', 'carl', 'walkers', 'shane', 'cdc', 'biters', 'daryl', 'governor', 'merle', 'michonne', 'glenn', 'prison', 'alexandria', 'alpha', 'negan', 'kingdom', 'woodbury', 'sanctuary' ];

      let threeLettersBack ='DEFGHIJKLMNOPQRSTUVWXYZABC';

      let decodeAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      let randomWord = wordsetarr[Math.floor(Math.random() * wordsetarr.length)]
      console.log('${randomWord}');

      
      


}