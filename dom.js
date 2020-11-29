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


// GETELEMENTBYCLASSNAME

// get all the element with class name list-group-item(HTMLCollection)
let items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
items[0].textContent = 'ok';
items[1].innerHTML = 'no ok for now';
console.log(items[0]);
console.log(items[1]);
items[0].style.backgroundColor = 'yellow';
items[0].textContent = 'Item 1';
items[1].innerHTML = 'Item 2';

// this will give eror
// items.style.backgroundColor = '#4f4f4';


// iterate over and style all the item

for (let index = 0; index < items.length; index++) {
    items[index].style.backgroundColor = '#4f4f4';
}


// GETELEMENTBYTAGENAME

let li = document.getElementsByTagName('li');

console.log(li);

console.log(li[0]);
console.log(li[1]);
console.log(li[2]);
console.log(li[3]);

li[0].textContent = 'tag ok';
li[1].innerHTML = 'tag is not ok for now';
console.log(li[0]);
console.log(li[1]);

li[0].style.backgroundColor = 'blue';
li[0].textContent = 'li 1';
li[1].innerHTML = 'li 2';

// iterate over and style all the li(list)

for (let index = 0; index < items.length; index++) {
    li[index].style.backgroundColor = 'lightblue';
}


// QUERYSELECTOR //


header = document.querySelector('#main-header')

header.style.border = 'solid 1px blue';
console.log(header);

// if there more than one input will select the first one
let input = document.querySelector('input');

let submit = document.querySelector('input[type="submit"]');


input.value = 'Sadam';
submit.value = 'send';


items = document.querySelector('.list-group-item');


// this give us the last child
let lastItem = document.querySelector('.list-group-item:last-child');

// this give us the second child
let secondItem = document.querySelector('.list-group-item:nth-child(2)');

// style the first item
items.style.color = 'red';

// style the second item
secondItem.style.color = 'yellow';

//  style the last item
lastItem.style.color = 'green';



// QUERY SELECTOR ALL // 

// this return us all the elment with id name title
let titles = document.querySelectorAll('.title');

console.log(titles);

// now have nodeList(array of titles)
// titles[0].textContent = 'Hello again';

// titles[1].textContent = 'nice to meet You';

// get all odd list element
let odd = document.querySelectorAll('li:nth-child(odd');


// get all even list element
let even = document.querySelectorAll('li:nth-child(even');

// loop over each even li and styled
for (let index = 0; index < odd.length; index++) {
    even[index].style.backgroundColor = '#ccc';

}