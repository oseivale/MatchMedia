// Showing the matchMedia Object
// Show the onChange set to null before setting it
const mediaQuery = window.matchMedia('(max-width: 768px)');
console.log(mediaQuery)

// Selecting the div elements needed in the different UIs
const box1 = document.querySelector('.box1')
const box3 = document.querySelector('.box3')
const blue = document.querySelector('.blue')

// Function that checks for matching media query
const watchWidth = () => {
    console.log('function called.')
    if(mediaQuery.matches){
        box1.classList.remove('box1')
        box1.classList.add('mobile-box1')

        box3.classList.remove('box3')
        box3.classList.add('mobile-box3')

        blue.classList.add('no-blue')
    } else {
        box1.classList.add('box1')
        box1.classList.remove('mobile-box1')

        box3.classList.add('box3')
        box3.classList.remove('mobile-box3')

        blue.classList.remove('no-blue')
    }
}

watchWidth()

// Function fires on change
mediaQuery.addEventListener("change", watchWidth)




