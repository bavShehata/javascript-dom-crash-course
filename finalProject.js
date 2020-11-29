// select the form by id name ('addForm' and store in variable form
let form = document.getElementById('addForm');

// select the list by id name ('items' and store in variable itemList
let itemList = document.getElementById('items');

//  select the input by id name ('filter' and store in variable filter
let filter = document.getElementById('filter');

// function to addItem 

const addItem = function(e) {
    // prevent the default behavior
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add class to the li emlement
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create the delete button element
    let deleteButton = document.createElement('button');

    // Add classes to detlete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Append Text node to detlete button
    deleteButton.appendChild(document.createTextNode('X'));

    // add the delete Button to the li(Append button to li)
    li.appendChild(deleteButton);

    // add the li to the list (Append li to list)
    itemList.appendChild(li);
};

// function to remove items

const removeItem = function(e) {
    // delete only the class with name delete
    if (e.target.classList.contains('delete')) {
        // confirm first before delete
        if (confirm('Are You Sure?')) {
            // remove the li from the list
            let li = e.target.parentElement
            itemList.removeChild(li);
        }
    }
};


// function to Filter items

const filterItem = function(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    console.log(text);

    // get list
    let items = itemList.getElementsByTagName('li');

    // convert this HTMLCOLECTION to an array
    Array.form(items).forEach(function(item) {
        let itemeName = item.firstChild.textContent;
        console.log(itemeName);
    });
}

// form submit even  //

// on sumbit call  addItem function
form.addEventListener('submit', addItem);

// Delete event

// on click call  removeItem function
itemList.addEventListener('click', removeItem);

// Filter event

// on keyup call  filterItem function
filter.addEventListener('keyup', filterItem);