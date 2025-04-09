function checkPalindrome() {
    // Get the word from the input field
    const word = document.getElementById('wordInput').value;

    // Create the reversed version of the word
    const reversedWord = word.split('').reverse().join('');

    // Check if the word is the same as the reversed word
    if (word === reversedWord) {
        document.getElementById('result').innerText = 'true';
    } else {
        document.getElementById('result').innerText = 'false';
    }
}