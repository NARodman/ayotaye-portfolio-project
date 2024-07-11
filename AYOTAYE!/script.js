let words = document.querySelectorAll(".word");
words.forEach((word)=> {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=> {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

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

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=> {
        letter.className = "letter behind";
        setTimeout(()=> {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};

changeText();
setInterval(changeText, 3000);

//Circle Skill//

document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for skill bars
    const skillBars = document.querySelectorAll('.skill-bar .bar span');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const span = entry.target;
            const width = span.getAttribute('data-width');

            if (entry.isIntersecting) {
                span.style.width = `${width}%`;
            } else {
                span.style.width = '0';
            }
        });
    }, observerOptions);

    skillBars.forEach(span => {
        span.setAttribute('data-width', span.style.width.match(/(\d+)%/)[1]);
        observer.observe(span);
    });

    // Intersection Observer for professional skills circles
    const circles = document.querySelectorAll('.circle');
    const circleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const elem = entry.target;
            if (entry.isIntersecting) {
                var dots = elem.getAttribute("data-dots");
                var marked = elem.getAttribute("data-percent");
                var percent = Math.floor(dots * marked / 100);
                var points = "";
                var rotate = 360 / dots;

                for (let i = 0; i < dots; i++) {
                    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
                }

                elem.innerHTML = points;

                const pointsMarked = elem.querySelectorAll('.points');
                for (let i = 0; i < percent; i++) {
                    pointsMarked[i].classList.add('marked');
                }

                // Reveal text inside circle
                const textBig = elem.nextElementSibling.querySelector('big');
                textBig.style.opacity = 1;
            } else {
                // Reset points and text opacity
                elem.innerHTML = "";
                const textBig = elem.nextElementSibling.querySelector('big');
                textBig.style.opacity = 0;
            }
        });
    }, observerOptions);

    circles.forEach(circle => {
        circleObserver.observe(circle);
    });
});


/* Mix It Up Section (Sorting for Portfolio) */

var mixer = mixitup('.portfolio-gallery'); 



// active menu //

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//sticky navbar ////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

//toggle icon navbar////

