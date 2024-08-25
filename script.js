const userInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
const userWord = document.querySelector('.user-word');
const checkButton = document.querySelector('#check-btn');



checkButton.addEventListener('click', ()=> {

  console.log(userInput.value);


  const regex = /[\s+-.,_:\(\)\/\\\|]/g;
 
  const userInputFiltered = userInput.value.replace(regex, '');
  console.log(userInputFiltered);
const userInputReversed = userInputFiltered.split('').reverse().join('');
console.log(userInputReversed); 

if (userInputFiltered.toLowerCase() === userInputReversed.toLowerCase()) {
  console.log('U kurac ')
    userWord.textContent = `${userInput.value}`;
    result.textContent = `is a palindrome.`;
    userWord.style.color = 'green';
    result.style.color = 'green'; 
} else {
  userWord.textContent = `${userInput.value} `;
  result.textContent = ` is not a palindrome.`;
  userWord.style.color = 'red';
  result.style.color = 'red';
}
});




