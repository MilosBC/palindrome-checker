const userInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
const userWord = document.querySelector('.user-word');
const checkButton = document.querySelector('#check-btn');



checkButton.addEventListener('click', ()=> {

  if (userInput.value === '') {
    alert ('Please input a value!');
  } else {
  const regex = /[\s+-.,_:\(\)\/\\\|]/g;
  const userInputFiltered = userInput.value.replace(regex, '');
  const userInputReversed = userInputFiltered.split('').reverse().join('');
    if (userInputFiltered.toLowerCase() === userInputReversed.toLowerCase()) {
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

}
  });




