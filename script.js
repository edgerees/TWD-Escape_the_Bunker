document.addEventListener('DOMContentLoaded', () => {



    let youDoWantTo = document.querySelector('#yes')
    youDoWantTo.addEventListener('click', () => {

          document.getElementById('themesong').play()
          document.getElementById('page1').style.display = 'none'
          document.getElementById('page2').style.display = 'grid'
    })

    let youDoNotWantTo = document.querySelector('#no')
    youDoNotWantTo.addEventListener('click', () => {
          window.location.href= 'https://www.amc.com/shows/the-walking-dead--119'
    })

    let turnToPage3 = document.getElementById('introtalk1')
    turnToPage3.addEventListener('click', () => {

          document.getElementById('page2').style.display = 'none'
          document.getElementById('page3').style.display = 'grid'
    })

    let turnToPage4 = document.getElementById('introtalk2')
    turnToPage4.addEventListener('click', () => {

          document.getElementById('page3').style.display = 'none'
          document.getElementById('page4').style.display = 'grid'
    })

    let turnToPage5 = document.getElementById('introtalk3')
    turnToPage5.addEventListener('click', () => {

          document.getElementById('page4').style.display = 'none'
          document.getElementById('page5').style.display = 'grid'
    })

    let arr = ['rick', 'carl', 'walkers', 'shane', 'cdc', 'biters', 'daryl', 'governor', 'merle', 'michonne', 'glenn', 'prison', 'alexandria', 'alpha', 'negan', 'kingdom', 'woodbury', 'sanctuary' ];

    let threeLettersBack ='DEFGHIJKLMNOPQRSTUVWXYZABC';

    let decodedAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let randomWord = arr[Math.floor(Math.random() * arr.length)];

    console.log(`CHEAT CODE ACCEPTED: \nTHE ANSWER IS ${randomWord}`);

    let splitRandomWord = randomWord.split('');

    let dashHolder = [];

    for (let i = 0; i < splitRandomWord.length; i++) {
          dashHolder.push('_ ');
    }

    let caesarHolder =''

    for (let i = 0; i < splitRandomWord.length; i++) {
          for (let j = 0; j < decodedAlpha.length; j++) {
                if (splitRandomWord[i].toUpperCase()=== decodedAlpha[j]) {
                      caesarHolder += threeLettersBack[j]
                }
          }
    };

    let letterCatcher = [];
    console.log(letterCatcher)

    document.getElementById('encoded-word').innerHTML = caesarHolder;
    document.getElementById('dash-holder').innerHTML = dashHolder.join('');
    document.getElementById('correct-answer').innerHTML = `THE CORRECT ANSWER WAS: ${randomWord.toUpperCase()}`
    
    let wrongAnswers = 0

    
    let form = document.querySelector('#form4');

    form.addEventListener('submit', (event) => {
          event.preventDefault();
          let temp = dashHolder.join('');
          let userInput = (document.querySelector('#user-input').value).toLowerCase()
          if (userInput === '') {
                window.alert('YOU MUST ENTER A LETTER!')

          }else {

                for (let i = 0; i < splitRandomWord.length; i++) {
                      if (userInput === splitRandomWord[i]) {
                            dashHolder[i] = `${userInput}`;
                            document.getElementById('dash-holder').innerHTML = (dashHolder.join('')).toUpperCase()
                      }
                }
                if (temp == dashHolder.join('')) {
                      wrongAnswers++;
                }
                letterCatcher.push(userInput.toUpperCase())
                document.getElementById('playerchoice').innerHTML = `YOU HAVE ENTERED: ${letterCatcher}, `
                if (wrongAnswers === 1) { 
                      document.getElementById("background5").style.backgroundImage = "url('bgg2.png')";
                }else if (wrongAnswers === 2) {
                      document.getElementById("background5").style.backgroundImage = "url('bgg3.png')";
                }else if (wrongAnswers === 3) {
                      document.getElementById("background5").style.backgroundImage = "url('bgg4.png')";
                }else if (wrongAnswers === 4) {
                      document.getElementById("background5").style.backgroundImage = "url('bgg5.png')";
                }else if (wrongAnswers === 5) {
                      document.getElementById("background5").style.backgroundImage = "url('bgg6.png')";
                }else if (wrongAnswers === 6) {
                      document.getElementById("background5").style.backgroundImage = "url('bgg7.png')";
                }
                if (!dashHolder.includes('_ ')){
                      document.getElementById('page5').style.display = "none";
                      document.getElementById('you-win').style.display = "flex";
                } else if (wrongAnswers === 7) {
                      document.getElementById('page5').style.display = 'none'
                      document.getElementById('you-lose').style.display = "flex"
                }
          }
          document.getElementById('user-input').value = ''

    })



    
})