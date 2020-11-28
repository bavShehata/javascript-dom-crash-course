// alert("test");

// EXAMINE THE DOCUMENT OBJECT //

// this will show us all the Properties and methods attach to the document object 

console.dir(document);

// thsi will give us domain) 
console.log(document.domain);

// thsi will give us url) 
console.log(document.URL);

// thsi will give us page title) 
console.log(document.title);
// document.title = 123;
console.log(document.title);

// thsi will give us !DOCTYPE html) 
console.log(document.doctype);

// thsi will give us head) 
console.log(document.head);

// thsi will give us body) 
console.log(document.body);

// thsi will give us all as array) 
console.log(document.all);

// console.log(document.all[0]);

// console.log(document.all[3]);

// thsi will give us all the form ) 
console.log(document.forms);

// thsi will give us link) 
console.log(document.links);

// thsi will give us the first form) 
console.log(document.forms[0]);

// thsi will give us images) 
console.log(document.images);


// SELECTORS//

// GETELEMENTBYID

let headerTitle = document.getElementById('header-title');

let header = document.getElementById('main-header')

console.log(headerTitle);
console.log(header);

// textContent

// headerTitle.textContent = "hello";

// innerText

// headerTitle.innerText = "goodby";

// innerHTML

// headerTitle.innerHTML = "goodby";

// change the style 
header.style.borderBottom = 'solid 1px red';