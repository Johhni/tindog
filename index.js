import {dogs} from "./data.js"
import {Dog} from "./Dog.js"

let hasChosen = false;

document.getElementById('accept-btn').addEventListener('click', function(){
    if(!hasChosen){
        renderLike()
    }
})

document.getElementById('reject-btn').addEventListener('click', function(){
    if(!hasChosen){
        renderSwipe()
    }
})

function renderLike(){
    document.getElementById('accept').style.display = 'block';
    hasChosen = true
    setTimeout(function(){
        document.getElementById('accept').style.display = 'none';
        renderFeed()
        hasChosen = false
    }, 1500)
}

function renderSwipe(){
    document.getElementById('reject').style.display = 'block';
    hasChosen = true
    setTimeout(function(){
        document.getElementById('reject').style.display = 'none';
        renderFeed()
        hasChosen = false
    }, 1500)
}

function renderFeed(){
    let dog = getNewDog()
    if(dog === ''){
        noMoreDogs()
    }else{
        document.getElementById('feed').innerHTML = dog.getDogHtml();
    }
}

function getNewDog(){
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : ''
}

function noMoreDogs(){
    document.getElementById('main').innerHTML = '<h1>No More Dogs Left</h1>'
}

renderFeed()