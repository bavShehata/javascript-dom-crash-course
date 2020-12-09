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

// let myDiv = document.getElementById('test')
// myDiv.innerHTML = document.title
// console.log(document.title)


/*
   innertText // Not Standard
   outerText // Not Standard
   innerHTML
   textContent
   // Get HTML Content 
     Element.innerHTML

     // Get text Content 
     Element.innerContent
*/


// let div = document.getElementById('main')
// console.log(div.innerHTML)
// console.log(div.textContent)
// div.innerHTML = "this is the new text"
// console.log(div.innerHTML)
// console.log(div.textContent)


//  Elements - Get, Set Attribute Value


// console.log(document.querySelector('div'))
// let myImage = document.querySelector('img')

// myImage.src = 'hhh'
// myImage.alt = 'alt src'
// console.log(myImage)
// console.log(myImage.alt)


// Elements - GetAttribute, SetAttribute


// myImage.setAttribute('src', 'http://placehold.it/300/300')

// console.log(myImage.getAttribute('src'))


// Elements - HasAttribute, RemoveAttribute


// if (myImage.hasAttribute('alt')) {
//     console.log("yes has ")
//     if (myImage.alt == '') {
//         myImage.setAttribute('alt', 'new attribute')
//     }
// } else {
//     console.log('no not has attriblue')
// }


// Elements - ClassList [ Item, Contains, Length ]

//  Elements - ClassList [ Add, Remove, Toggle ]

// let button = document.querySelector('button')

// button.onclick = function() {
//     let div = document.getElementById('main')
//     div.classList.add('newClass')
//     console.log(div)
// }

// console.log(button)