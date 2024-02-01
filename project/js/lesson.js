// PHONE CHECKER
//
// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')
//
// const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value))
//         phoneResult.innerHTML = 'OK'
//     phoneResult.style.color = 'green'
// } else{
//     phoneResult.innerHTML = 'NOT OK'
//     phoneResult.style.color = 'red'
// }

// TAB SLIDER
const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let currentTab = 0

const hideTabContent = () => {
    tabContents.forEach((tabBlock) => {
        tabBlock.style.display = 'none'
    })
    tabItems.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}
// dz3
const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabItems.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem,tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(currentTab)
            }
        })
    }
}




// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')




const converter = (element, targetElement,targetsElement, currentValue) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetsElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetsElement.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetsElement.value = (element.value * (data.usd / data.eur)).toFixed(2)
                    break
                default:
                    break
            }
            if (element.value === '' || targetElement.value === ''){
                targetElement.value = ''
                targetsElement.value = ''
            }
        }catch (error){
            console.log(error)

        }
    }
}

converter(somInput, usdInput,eurInput, "som")
converter(usdInput, somInput,eurInput, "usd")
converter(eurInput, somInput, usdInput,"eur")




// somInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET','../data/converter.json')
//     request.setRequestHeader('Content-type','application/json')
//     request.send()
//
//     request.onload = () => {
//     const  response = JSON.parse(request.response)
// usdInput.value = (somInput.values / response.usd).toFixed(2)
//     }
// })



//DRY - don't repeat yourself
//KISS - keep it simple stupid
//SOL


// DZ777777

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1


// const cardFetcher = (id = 1) => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML =`
//              <p>${data.title}</p>
//              <p style="color: ${data.completed ? 'green': 'red'}">${data.completed}</p>
//              <span>${data.id}</span>`
//         })
// }
// cardFetcher(count)
const async = async (id = 1) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
        card.innerHTML = `
         <p>${data.title}</p>
             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
             <span>${data.id}</span>\`
        })
        `
    } catch (error){
        console.error(error)
    }

}
async(count)


btnNext.onclick = () => {
    count++
    if (count > 200) {
        count = 1
    }
    async (count)

}
btnPrev.onclick = () => {
    count--
    if (count < 1){
        count = 200
    }
    async (count)
}
const fetchRequest  = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }catch (error)  {
        console.error(error)
    }
}
fetchRequest()


const citySearch = () => {
    cityNameInput.addEventListener('input', async(event)=> {
        try {
            const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`);
            const data = await response.json()
            city.innerHTML = data.name ? data.name : ' Город не найден'
            temp.innerHTML = data?.main?.temp?Math.round(data?.main?.temp-273.15)+'&deg;C' : '...'
        }catch (error){
            console.log(error)
        }
    })
}
citySearch()



// WEATHER

const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'











// const fetchRequest = () => {
//     const fetchPlace = fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
// fetchRequest()


