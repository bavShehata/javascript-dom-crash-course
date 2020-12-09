// [1] - document.getElementById ()

// let myDiv = document.getElementById('test')
// myDiv.innerHTML = 'Changed by javascript'

//  [2] - document.getElementsByTagName()

// myDiv = document.getElementsByTagName('p')
// myDiv[0].innerHTML = 12
// myDiv[1].innerHTML = 'Changed by javascript'

// [3] -  document.getElementsByClassName()
// Not Compatible With IE 8

// myDiv = document.getElementsByClassName('testDiv')
// myDiv[0].innerHTML = 'test with Javscript'
// myDiv[1].innerHTML = 'test with Javscript'


// [4] -  document.querySelectorAll
// Not Compatible With IE 8

// let myElement = document.querySelectorAll('div')
// console.log(myElement)
// myElement[1].innerHTML = 123445;
// myElement[0].innerHTML = 'Changed by javascript second test'


// Object Collection 
// [5] -  document.title
// [6] - document.images
// [7] document.forms
// [9] document.body
// [10] document.links

let myDiv = document.getElementById('test')
myDiv.innerHTML = document.title
console.log(document.title)