// Create the Dog class here

export class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `<div class="img-container" id="img-container">
                    <img src="${avatar}">
                </div>
                <div class="info" id="info">
                    <h1>${name}, ${age}</h1>
                    <p class="bio" id="bio">${bio}</p>
                </div>`
    }
}