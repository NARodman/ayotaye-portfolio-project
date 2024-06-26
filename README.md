# ayotaye-portfolio-project
 This is a portfolio project I create for my friend who makes music beats.

 --Documentation--

 Day 1: I uploaded the file skeletons with no code and committed the changes. 

 Day 2: Didn't have much time today, so I added the html skeleton code.

 Day 3: I started the menu section and added the google font that I wanted to use, which I'll paste here. I still need to add colors, but I'm trying to decide which ones. 
 Google font: @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');

 Day 4-: Continuing on the stylesheet, I picked out the text and background colors. For right now I chose a mix of purples as the main focus of color. This will probably changed later. The font family I chose was Dosis. 

 Day 5: Finishing up the header section. Starting the home section. 

 Day 6: Fixed the image upload, so that it had a transparent background. Started working on the JS for the occupation animation and added styles in the CSS for the home section. 

** Image created by me through Procreate
 
 ** Blob Generator: https://lokesh-coder.github.io/blobs.app/?e=6&gw=6&se=716705&c=d1d8e0&o=0
 
 ** Pulse Animation: 
 ```css
 .img-box img {
    animation: pulse 3.5s linear infinite;
 }
 
 ```
 
 ```css
 @keyframes pulse {
	0% {
		transform: scale(1.1);
	}

	50% {
		transform: scale(0.8);
	}

	100% {
		transform: scale(1.1);
	}
}
 ```


Day 7: Started adding the about section and included a placeholder image. 

** Placeholder image: https://picsum.photos/images#2

** Morph Animation

```css
@keyframes morph {
    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
    30% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }
    60% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
    80% {
        border-radius: 69% 31% 66% 34% / 21% 30% 70% 79%;
    }
}
```

Day 8: Added the services section and completed the skills section. The skills included are subject to change at client's discretion. Started the Portfolio (Projects) section. 

Day 9: Continued working on the Portfolio (Projects) section. 