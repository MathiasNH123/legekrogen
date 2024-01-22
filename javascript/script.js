/* Variabler */
const slide = document.querySelector('.slider-slide')
const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous')

let currentImageIndex = 0

let images = [
    'asset/img/slider1.jpg',
    'asset/img/slider2.jpg',
    'asset/img/slider3.jpg'
]

/* funktionen sørger for at give <img> en src attribute - hver gang funktionen køres, opdateres src attributen */
function setActiveSlide(index){
    /* slide.setAttribute('src', images[index]) */
    slide.src = images[index]
}

/* funktionen sørger for at give <img> en src attribute - hver gang funktionen køres, opdateres src attributen */
setActiveSlide(currentImageIndex)

/* hvis vi er nået til det sidste billede i image array'et, skal den starte forfra, når der trykkes på 'frem' knappen */
/* Ellers currentImageIndex +1 - vis det næste billede i rækken */
function next(){
    if(currentImageIndex >= images.length - 1){
        currentImageIndex = 0
    }else{
        currentImageIndex += 1
    }
    setActiveSlide(currentImageIndex)

}

btnNext.addEventListener('click', next)

setInterval(next, 5000)



