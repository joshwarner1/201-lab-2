'use strict';
let score = 0;

let username = prompt('What\'s your name?');

alert(`Welcome to my about me page ${username}!!! Let's play my About Me Questionnaire`);

let aboutQuestionOne = prompt('Is basketball my favorite sport? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionOne);

if (aboutQuestionOne === 'y' || aboutQuestionOne === 'yes') {
  alert('Thats right!!');
} else if (aboutQuestionOne === 'n' || aboutQuestionOne === 'no') {
  alert('You should know better...');
} if (aboutQuestionOne === 'y' || aboutQuestionOne === 'yes') {
  score++;
}

let aboutQuestionTwo = prompt('Is Hip-Hop my favorite type of music?  Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionTwo);

if (aboutQuestionTwo === 'y' || aboutQuestionTwo === 'yes') {
  alert('HIP HOP HOORAY!!!');
} else if (aboutQuestionTwo === 'n' || aboutQuestionTwo === 'no') {
  alert('Come on now....');
} if (aboutQuestionTwo === 'y' || aboutQuestionTwo === 'yes') {
  score++;
}

let aboutQuestionThree = prompt('Is the Boston Celtics my favorite team?').toLowerCase();
console.log(aboutQuestionThree);

if (aboutQuestionThree === 'y' || aboutQuestionThree === 'yes') {
  alert('GOOOO Celtics!!!!');
}
else if (aboutQuestionThree === 'n' || aboutQuestionThree === 'no') {
  alert('Who else would I like');
} if (aboutQuestionThree === 'y' || aboutQuestionThree === 'yes') {
  score++;
}

let aboutQuestionFour = prompt('Is baseball my second favorite sport? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionFour);

if (aboutQuestionFour === 'y' || aboutQuestionFour === 'yes') {
  alert('Nope I do not like baseball...');
} else if (aboutQuestionFour === 'n' || aboutQuestionFour === 'no') {
  alert('Yep I do not like baseball.');
} if (aboutQuestionFour === 'n' || aboutQuestionFour === 'no') {
  score++;
}

let aboutQuestionFive = prompt('Do I like summer time? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionFive);

if (aboutQuestionFive === 'y' || aboutQuestionFive === 'yes') {
  alert('Nah it is too hot in the summer...');
} else if (aboutQuestionFive === 'n' || aboutQuestionFive === 'no') {
  alert('Yep! Winter is actually my favorite time of year!!');
} if (aboutQuestionFive === 'n' || aboutQuestionFive === 'no') {
  score++;
}

let retroJordans = 5;
console.log(typeof userAnswer);
for (let i = 4; i > 0; i--)
{

  let userAnswer = parseInt(prompt('What is my favorite Jordan Model between 1 and 5?'));
  if (userAnswer < retroJordans) {
    alert('Try a higher number...');
  } else if (userAnswer > 5) {
    alert('Guess a lower number');
  } else if (userAnswer === retroJordans) {
    score++;
    alert('Correct!!!');
    break;
  } else if (i === 1) {
    alert('Out of attempts');
  }

}

let favBrands = ['nike', 'new balance', 'reebok', 'adidas'];

for(let i = 6; i > 0; i--){
  let userBrandPick = prompt(`Which of these are my favorite brand?: ${favBrands}`);
  for(let i=0; i < favBrands.length; i++) {
    if (userBrandPick === 'nike' || userBrandPick === 'new balance'){
      score++;
      alert('These are my favorites');
      break;
    } else {
      {userBrandPick = prompt(`these are not my favorites. try again... ${favBrands}`);

      }
    }
  }
}
alert(`Your score was ${score} out of 7`);



