//animation for the subtitle text :]
const dynamicText = document.getElementById("typeText");
const words = ["WEB", "UX/UI", "GRAPHIC"];

//tracks position and checks whether typing or deleting
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const dynamicTextEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        //start typing word
        charIndex++;
        setTimeout(dynamicTextEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        //start deleting word
        charIndex--;
        setTimeout(dynamicTextEffect, 50);
    } else {
        //switch to next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(dynamicTextEffect, 1500);
    }
}

dynamicTextEffect();
//back to top button function
function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}