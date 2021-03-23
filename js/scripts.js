// Variables to list and list item
let list = $('#list');
let li = $('<li></li>');
let listInputValue = $('#input').val();

// Appends list item to list
list.append(li);
li.append(listInputValue);
listInputValue.append(li);

// Strikes out list item
//li.addClass('strike');
