// Text typing 

const textDisplay = document.getElementById('text');
const phrases = ['Let bonjour = ', '"Hello, my name is Cyprien."', '"I love to code."', '"Here is what I can do."', '"Contact me!"'];

// i is the sentence
let i = 0;

// j is letters
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

// loop function
function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');
    if (i < phrases.length) {
        // if letter <= length of sentence 
        // push letter in the array
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = currentPhrase.join('');
        }


        if (isDeleting && j <= phrases[i].length) {
            // Delete letter one by one
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('');
        }

        // if letter = sentence's length, next sentence
        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }

    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();

