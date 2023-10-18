export const palindrome = (text: string) => {
  let textResult = '';
  let result = '';

  if (typeof text === 'string' && text !== null && text.trim() !== '') {
    text = text.toLowerCase();
    const reversedText = text.split('').reverse().join('');

    textResult =
      reversedText === text
        ? `${text} is a palindrome.`
        : `${text} is not a palindrome.`;
  }
  return textResult === result ? 'value invalid.' : textResult;
};
