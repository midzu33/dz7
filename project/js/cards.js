const card = document.querySelector('.card')
const URL = 'https://jsonplaceholder.typicode.com/posts'

const cardSmall = async (url) => {
    try {
        const response = await fetch(url)
        const data =await response.json()
        data.forEach(data => {
            const cardItem = document.createElement('div')
            cardItem.classList.add('cardBig')
            cardItem.innerHTML = `
                <div class="cardLong">
                <div class="cardImg">
                <img src="https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a3fbef2671f5.jpg" alt="naruto">              
                    </div>
                    </div>
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
            `
            card.append(cardItem)
        })
    }catch (error){
        console.error(error)
    }
}
cardSmall(URL)