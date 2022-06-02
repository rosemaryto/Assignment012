// STEP 1
function Cat() {}
const Dog = function() {}


// STEP 2
const cat1 = new Cat()
const dog1 = new Dog()

// STEP 3
// class Animal {
//     constructor () {
//         console.log('The Animal has been created.')
//     }
// }
// const bird1 = new Animal()

// STEP 4
// function Animal(color,animalType) {
//         console.log(`The new ${color} ${animalType} has been created.`)
// }
// const bird2 = new Animal('blue','bowerbird')

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {

//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     console.log(`The new animal is a ${this.type}. It is a ${this.color} ${this.breed} and is ${this.height} feet tall and ${this.length} feet wide.`) 
//     }
//     speak = () => {
//         if(this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking!`)
//         } else if(this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing!`)
//         }
//     }
// }
// const dog3 = new Animal('dog','husky','black',5,2)

// STEP 6
// const props = Object.getOwnPropertyNames(dog3)
// console.log(props)

// STEP 7
// dog3.speak()


// STEP 8
class Animal {
    constructor(type, breed, color, height, length) {
    let _type = type
    let _breed = breed
    let _color = color
    let _height = height
    let _length = length
    

    let checkType = () => {
        if(_type === 'dog') {
            return _type
        } else if(_type === 'cat') {
            return _type
        }
    }
    this.speak = () => {
        console.log(`The ${checkType()} has made a noise!`)
    }
} 
}   
const animal2 = new Animal('cat','bengal','black',5,2)
console.log(animal2.speak())


    
// STEP 9
function findWords(str) {
    return str.split(' ')
    .filter(function(n) {
        return n != ' '
    })
    .length
}
const sentence = 'This is a sentence. This is another sentence.'
console.log(`Sentence: ${sentence}`)
console.log(`Total words: ${findWords(sentence)}`)
