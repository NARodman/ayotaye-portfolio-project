let words = document.querySelectorAll(".word");
words.forEach((word)=> {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=> {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = 1;

let changeText = ()=> {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter, i)=> {
        setTimeout(()=> {
            letter.className = "letter out";
        }, i * 80);
    });
}