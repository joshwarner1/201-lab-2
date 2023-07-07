'use strict';

let username = prompt('What\'s your name?');

alert(`Welcome to my about me page ${username}!!! Let's play my About Me Questionnaire`);

let aboutQuestionOne = prompt('Is basketball my favorite sport? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionOne);

if (aboutQuestionOne === 'y'|| aboutQuestionOne === 'yes'){
  alert('Thats right!!'); 
} else if (aboutQuestionOne === 'n' || aboutQuestionOne === 'no'){
  alert('You should know better...');
}

let aboutQuestionTwo = prompt('Is Hip-Hop my favorite type of music?  Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionTwo);

if (aboutQuestionTwo === 'y' || aboutQuestionTwo === 'yes'){
  alert('HIP HOP HOORAY!!!');
} else if (aboutQuestionTwo === 'n' || aboutQuestionTwo === 'no'){
  alert('Come on now....');
}

let aboutQuestionThree = prompt('Is the Boston Celtics my favorite team?').toLowerCase();
console.log(aboutQuestionThree);

if (aboutQuestionThree === 'y' || aboutQuestionThree === 'yes' ){
  alert('GOOOO Celtics!!!!');}
else if (aboutQuestionThree === 'n' || aboutQuestionThree === 'no'){
  alert('Who else would I like');
} 

let aboutQuestionFour = prompt('Is baseball my second favorite sport? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionFour);

if (aboutQuestionFour === 'y'|| aboutQuestionFour === 'yes'){
  alert('Nope I do not like baseball...');
} else if (aboutQuestionFour === 'n' || aboutQuestionFour === 'no'){
  alert('Yep I do not like baseball.');
}

let aboutQuestionFive = prompt('Do I like summer time? Answer y/n or yes/no').toLowerCase();
console.log(aboutQuestionFive);

if (aboutQuestionFive === 'y' || aboutQuestionFive === 'yes'){
  alert('Nah it is too hot in the summer...');
} else if (aboutQuestionFive === 'n' || aboutQuestionFive === 'no'){
  alert('Yep! Winter is actually my favorite time of year!!');
}

alert(`Thank you for your time ${username}!! Check out my mini bio before you go.`); 






