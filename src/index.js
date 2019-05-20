const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const toyUrl = "http://localhost:3000/toys"

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

document.addEventListener("DOMContentLoaded", setPage)

document.addEventListener("click", increaseLikes)

function setPage() {
  fetchToys()
  addSubmitListener()

  // if e.currentTarget == form, then do ?
}

// OR HERE!
function fetchToys() {
  fetch(toyUrl)
  .then(response => response.json())
  .then(toysArray => {
    toysArray.forEach(renderToy)
    // toysArray.forEach(toy => renderToy(toy))
  })
}

function renderToy(toy) {

let toyBox = document.getElementById("toy-collection")
let toySlot = document.createElement("div")
toySlot.classList.add("card")
let toyId = toySlot.dataset.id = toy.id

//set h2, img, p, button
let h2 = document.createElement('h2')
  h2.innerText = toy.name

let img = document.createElement('img')
  img.classList.add('toy-avatar')
  img.src = toy.image

let pTag = document.createElement('p')
  pTag.innerText = `${toy.likes} Likes`

let cardBtn = document.createElement('button')
  cardBtn.classList.add('like-btn')
  cardBtn.innerText = 'Like <3'
  cardBtn.addEventListener("click", increaseLikes)

//append card elements to toySlot
toySlot.append(h2, img, pTag, cardBtn)

//append slot to toyBox
toyBox.append(toySlot)

}

function addSubmitListener () {
  // grab values/input from form, setting vars to ID the junk
  // add eventlistener, submission thing
  let toySubmitForm = document.getElementById("toy-form")
  toySubmitForm.addEventListener("submit", createToy)
}

function createToy(e) {
  e.preventDefault()
  // debugger
  let nameSub = document.getElementById("name-thing").value
  let pictureSub = document.getElementById("pic-thing").value

  let toyInfo = {
    name: nameSub, image: pictureSub, likes: 0
  }

  fetch(toyUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(toyInfo)

  })
  .then(res => res.json())
  .then(toyObj => {
    alert("Ya did it, bud!")
  })
  .catch(error => {
    alert("Ya done goofed!")
  })

  setTimeout(e.currentTarget.reset(), 2)
}

function increaseLikes(e) {
  e.preventDefault()
  // let likeButton = document.querySelector(".like-btn")

  // set conditional -- if e.target is a like button do stuff, if not, do nothing.

  // if (e.target === likeButton)
  //   console.log ("I finds you!")
let likesNum = e.target.parentElement.children[2].textContent.split(" ")[0]
let numNum = parseInt(likesNum)
numNum += 1


// if true, find number of likes within parent element

// then increment by one like when clicked

// then do fetch post to update

}
