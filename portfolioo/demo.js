const myu = document.querySelector('ul')
const turnGreen = myu.querySelector('li')
turnGreen.style.backgroundColor = "green"

const myH1 = document.querySelectorAll('h1')
myH1.style.color = 'green'

const myH1 = document.querySelectorAll('h1')
myH1[0].style.color = 'green'

const div = document.createElement('div')
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
div.innerHTML = "Hello World"
