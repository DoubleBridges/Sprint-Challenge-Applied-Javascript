// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articlesComponent() {
    return axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(data => {
            let metaContent = data.data.articles
            for (article in metaContent) {
                let articleArr = metaContent[article]
                articleArr.forEach(article => createArticle(article))

            }
        })

}

function createArticle(articleObj) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorPhoto = document.createElement('img')
    const authorName = document.createElement('span')

    const cardsContainer = document.querySelector('.cards-container')

    cardsContainer.appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorPhoto)
    imgContainer.appendChild(authorName)

    card.setAttribute('class', 'card')
    headline.setAttribute('class', 'headline')
    author.setAttribute('class', 'author')
    imgContainer.setAttribute('class', 'img-container')
    authorPhoto.setAttribute('src', `${articleObj.authorPhoto}`)

    headline.textContent = articleObj.headline
    authorName.textContent = articleObj.authorName

}

articlesComponent()
