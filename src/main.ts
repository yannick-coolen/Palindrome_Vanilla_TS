import { palindrome } from './palindrome';

const inputText = document.querySelector('#palindrome') as HTMLInputElement;
const resultDisplay = document.querySelector('#resultDisplay');

document.querySelector('#checkForPalindrome')?.addEventListener('click', () => {
  let inputValue = inputText.value;
  const result = palindrome(inputValue);
  resultDisplay!.textContent = result;
});
