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
                } /*concatanate*/
          }
    };

    let letterCatcher = [];
    console.log(letterCatcher)

    document.getElementById('encoded-word').innerHTML = caesarHolder; /*List encoded word*/
    document.getElementById('dash-holder').innerHTML = dashHolder.join('');
    document.getElementById('correct-answer').innerHTML = `THE CORRECT ANSWER WAS: ${randomWord.toUpperCase()}`
    
    let wrongAnswers = 0

    
    let form = document.querySelector('#form4');

    form.addEventListener('submit', (event) => {
          event.preventDefault(); /*Prevent refresh*/
          let temp = dashHolder.join(''); /* Gauge wrong answers*/
          let userInput = (document.querySelector('#user-input').value).toLowerCase()
          if (userInput === '') /*Did user put anything in*/{
                window.alert('YOU MUST ENTER A LETTER!');
          }else if (letterCatcher.includes(userInput.toUpperCase())) {
                window.alert('THATS THE SAME LETTER!');
                document.getElementById('user-input').value = ''

          }else {

                for (let i = 0; i < splitRandomWord.length; i++) {
                      if (userInput === splitRandomWord[i]) /*If input matches any of the letters of randomword*/{
                            dashHolder[i] = `${userInput}`; /* If it does then letter is put into dashHolder at right index*/
                            document.getElementById('dash-holder').innerHTML = (dashHolder.join('')).toUpperCase() /*Displays to user lowercase*/ 
                      }
                }
                if (temp == dashHolder.join('')) /* Has dash holder changed , if so then will go to wrong answer incremented by 1*/ {
                      wrongAnswers++; /* gp to line 100*/
                }
                letterCatcher.push(userInput.toUpperCase()) /* Push to user, show in lowercas*/
                document.getElementById('playerchoice').innerHTML = `YOU HAVE ENTERED: ${letterCatcher}, `
                if (wrongAnswers === 1) { /* Previously set to 0 ,1 wrong answer, will change image to make zombie appear*/
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
                if (!dashHolder.includes('_ ')) /*If dashHolder does NOT include any dashes, then user WON! apply function*/{
                      document.getElementById('page5').style.display = "none"; /*wipe page, then turn flex on*/
                      document.getElementById('you-win').style.display = "flex";
                } else if (wrongAnswers === 7) /*If wrongAnswer */{
                      document.getElementById('page5').style.display = 'none'/*wipe page, then turn flex on*/
                      document.getElementById('you-lose').style.display = "flex"
                }
          }
          document.getElementById('user-input').value = ''

    })



    
})