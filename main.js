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

// Elements - Client [ Height, Width ]
// Elements - Scroll [ Height, Width ]
// Elements - Offset [ Height, Width ]

// console.log(mainDiv.clientHeight)
// console.log(mainDiv.clientWidth)

// Elements - Scroll [ Top, Left ]
// Elements - Client [ Top, Left ]

// Elements - Style

// mainDiv.style.background = 'lightBlue'
// mainDiv.style.fontSize = '22px'
// mainDiv.style.color = "#000"
// document.querySelector('button').style.fontSize = '22px'

// - Document - InputEncoding, LastModified, Url

// console.log(document.inputEncoding)
// console.log(document.lastModified)
// console.log(document.URL)

//  Document - Create [ Element, Text, Comment ]
// Document - Create Attribute

// create the main element
let myElement = document.createElement('div')

// Append to body
document.body.appendChild(myElement)

// create tex node 
let myText = document.createTextNode('this div been Created by js')

// create comment
let comment1 = document.createComment('this is comment 1')
let comment2 = document.createComment('this is comment 2')

// create class attribute
let classAttribute = document.createAttribute('class')

// add attribute value
classAttribute.value = 'newClass'

// Add the comment to the element
myElement.appendChild(comment1)

// Add the text to my element 
myElement.appendChild(myText)

// Add the comment to the element
myElement.appendChild(comment2)

// add Attribut to element
myElement.setAttributeNode(classAttribute)


// get ul
let ul = document.getElementById('ulId')
ul.style.width = '400px'
ul.style.background = 'skyBlue'


for (let index = 0; index < 10; index++) {

    // create li
    let li = document.createElement('li')

    // add Styling
    li.style.padding = '20px'
    li.style.border = '1px solid blue'

    //create text node
    let liText = document.createTextNode("LI Number : " + (index + 1))

    // Append text node  to the li
    li.appendChild(liText)

    // Append li to the list
    ul.appendChild(li)

}
console.log(ul)

// Events - How To Write All Methods

let button = document.getElementById('btn')

function changeBorder() {
    ul.style.border = '1px solid green'
    document.querySelector('button').style.width = '100px'
    document.querySelector('button').style.padding = '10px'
}

// on click call the function
document.getElementById('btn').onclick = changeBorder

// Events - Onload, Onscroll, Onresize

window.onload = function() {
    console.log("Dom is Ready")
}

window.onscroll = function() {
    console.log("You are Scrolling now")
}

window.onresize = function() {
    console.log("You are resizeing now")
}