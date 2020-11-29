// select the form by id name ('addForm' and store in variable form
let form = document.getElementById('addForm');

// select the list by id name ('items' and store in variable itemList
let itemList = document.getElementById('items');

// form submit even  //

// function to addItem om the form

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
}


// on sumbit call  addItem function
form.addEventListener('submit', addItem);