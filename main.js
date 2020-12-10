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

//  Elements - Children - ChildNodes
// - Elements - Children - First & Last Child [ Element ]

// let body = document.body.childNodes;
// console.log(document.body.children)
// console.log(document.body.children[1].textContent)
// console.log(document.body.children[0].innerHTML)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.lastElementChild)


// Elements - Children - Append Child


// Get the mainDiv Div
// let mainDiv = document.getElementById('main')

// // Create div  element
// let newElement = document.createElement('div')

// // Create Text Node 
// let text = document.createTextNode("Hello new text Node")

// Create new Paragaraph element
// let newParagraph = document.createElement('p')

// // Append Tparagraph To The NewElement Div
// newElement.appendChild(newParagraph)

// // Append Text To The NewElement Div
// newElement.appendChild(text)

// Append newElement Div to the main Div
// mainDiv.appendChild(newElement)

// mainDiv.insertBefore(newParagraph, mainDiv.firstElementChild)

// mainDiv.insertBefore(newParagraph, mainDiv.firstElementChild)

// // mainDiv.appendChild(newParagraph)

// console.log(mainDiv.innerHTML)
// console.log(mainDiv.textContent)


//  Elements - Children - Insert Before
// Elements - Children - Remove Child

let mainDiv = document.getElementById('main')

// console.log(mainDiv)
// console.log(mainDiv.innerHTML)
// console.log(mainDiv.textContent)
// mainDiv.removeChild(mainDiv, childNodes[3])

//  Elements - Node [ Name, Value, Type ]

// console.log(mainDiv.childNodes[3].tagName)

// Elements - Clone Node


// Elements - Parent Element

// console.log(mainDiv.parentNode)
// console.log(mainDiv.parentElement.tagName)

// Elements - Next, Previous Sibling

// console.log(mainDiv.childNodes[1].nextSibling)
// console.log(mainDiv.childNodes[1].nextElementSibling)

//  Elements - Focus, Blur
//  Elements - Click
//  Elements - Add Event Listener

//   Elements - Contains

// let span = document.querySelector('span')
// console.log(mainDiv.contains(span))