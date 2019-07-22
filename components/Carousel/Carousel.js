/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent() {
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const mtns = document.createElement('img')
  const pc = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightBtn = document.createElement('div')

  const carouselContainer = document.querySelector('.carousel-container')

  carouselContainer.appendChild(carousel)
  carousel.appendChild(leftBtn)
  carousel.appendChild(mtns)
  carousel.appendChild(pc)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightBtn)

  carousel.setAttribute('class', 'carousel')
  leftBtn.setAttribute('class', 'left-button')
  mtns.setAttribute('src', './assets/carousel/mountains.jpeg')
  mtns.setAttribute('class', 'img-open')
  pc.setAttribute('src', './assets/carousel/computer.jpeg')
  trees.setAttribute('src', './assets/carousel/trees.jpeg')
  turntable.setAttribute('src', './assets/carousel/turntable.jpeg')
  rightBtn.setAttribute('class', 'right-button')

  let imgArr = [mtns, pc, trees, turntable]

  leftBtn.addEventListener('click', () => {
    for (let i = 0; i < imgArr.length - 1; i++) {
      if (i === imgArr.length - 1) {
        imgArr[i] = imgArr[0]
      } else {
        imgArr[i] = imgArr[i + 1]
      }
    }
    imgArr[0].classList.toggle('')
  })

}

carouselComponent()