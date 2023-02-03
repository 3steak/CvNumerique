// Text typing 

const textDisplay = document.getElementById('text');
const phrases = ['"Bonjour ! Je suis à la recherche d\'une alternance"', '"Contactez-moi !"'];

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

    const speedUp = Math.random() * (100 - 70) + 70;
    const normalSpeed = Math.random() * (150 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();

const clip = document.querySelectorAll('.clip');
for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter', function (e) {
        clip[i].play()
    })
    clip[i].addEventListener('mouseout', function (e) {
        clip[i].pause()
    })
}

//  MODAL CLOSE ON CLICK

$navLink = document.querySelectorAll('.nav-link');
$offcanvas = document.querySelector('.offcanvas-end');

$navLink.forEach(e => {
    e.addEventListener('click', () => {
        $offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');
        $offcanvas.classList.remove('show');
        setTimeout(() => {
            $offcanvasBackdrop.classList.remove('show');
        }, "500")

    })
});