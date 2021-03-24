// JQuery code

function newItem() {
	// 1. Adds a new item to the list of items

	let li = $('<li></li>');
	let inputValue = $('#input').val();
	let input = $('#input');
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must enter an item to your list!');
	} else {
		$('#list').append(li);
		input.val('');
	}

	// 2. Crosses out an item off the list

	function crossOut() {
		li.toggleClass('strike');
	}

	li.on('dblclick', function crossOut() {
		li.toggleClass('strike');
	});

	// 3(i). Adding the "X" as the delete button

	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	// 3(ii). Deletes list item after clicking X

	crossOutButton.on('click', deleteListItem);

	// 3(iii). Function that adds the delete class to list item

	function deleteListItem() {
		li.addClass('delete');
	}
	// 4. Reordering the items

	$('#list').sortable();
}
