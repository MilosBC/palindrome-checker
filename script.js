const userInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
const checkButton = document.querySelector('#check-btn');



checkButton.addEventListener('click', ()=> {

  console.log(userInput.value);


  const regex = /[\s+-.,_]/g;
 
  const userInputFiltered = userInput.value.replace(regex, '');
  console.log(userInputFiltered);
const userInputReversed = userInputFiltered.split('').reverse().join('');
console.log(userInputReversed); 

if (userInputFiltered.toLowerCase() === userInputReversed.toLowerCase()) {
    result.textContent = `${userInput.value} is a palindrome.`
    result.style.color = 'green';
} else {
    result.textContent = `${userInput.value} is not a palindrome.`
    result.style.color = 'red';
}
});




