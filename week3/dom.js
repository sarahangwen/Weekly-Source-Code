

// (A) Create (addItem())Takes the user input and adds it to an array (items).
//Refreshes the list to display the new item.
function addItem() {
    const input = document.getElementById("itemInput");
    if (input.value.trim() !== "") {
        items.push(input.value.trim());
        input.value = "";
        renderList();
    }
}
//Read (renderList())
//Clears the existing list.
//Loops through the items array and displays each item in the list. function renderList() {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    items.forEach((item, index) => {
        list.innerHTML += `
            <li class="item">
                <span contenteditable="true" onBlur="updateItem(${index}, this.innerText)">${item}</span>
                <button onclick="deleteItem(${index})">Delete</button>
            </li>`;
    });


    //Update (updateItemPrompt())
    //Prompts the user for an index (item number).
    //Prompts again for a new value and updates the selected item.
    function updateItemPrompt() {
        const index = prompt("Enter the item number to update:");
        if (index !== null && index >= 0 && index < items.length) {
            const newValue = prompt("Enter new value:");
            if (newValue !== null) {
                updateItem(index, newValue);
            }
        }
    }
    


    //Delete (deleteItemPrompt())
//Asks for the item number to delete.
//Removes it from the array and refreshes the list.
function deleteItemPrompt() {
    const index = prompt("Enter the item number to delete:");
    if (index !== null && index >= 0 && index < items.length) {
        deleteItem(index);
    }
}


let items = ["Beans", "Maize", "Gnuts", "Sorghum", "Soya"];  // Initial list of items

// Function to add a new item
// function addItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        itemInput.value = "";  // Clear input field
        renderList();  // Re-render the list after adding
    } else {
        alert("Please enter a valid item.");
    }

// Function to render the list dynamically
function renderList() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = "";  // Clear current list
    
    // Traverse the items and add them to the list dynamically
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Function to prompt user for an item to update
function updateItemPrompt() {
    const itemToUpdate = prompt("Enter the item you want to update:");
    if (itemToUpdate && items.includes(itemToUpdate)) {
        const newItem = prompt("Enter the new value for the item:");
        if (newItem) {
            const index = items.indexOf(itemToUpdate);
            items[index] = newItem;  // Update the item
            renderList();  // Re-render the list after updating
        }
    } else {
        alert("Item not found.");
    }
}

// Function to prompt user for an item to delete
function deleteItemPrompt() {
    const itemToDelete = prompt("Enter the item you want to delete:");
    if (itemToDelete && items.includes(itemToDelete)) {
        items = items.filter(item => item !== itemToDelete);  // Remove the item
        renderList();  // Re-render the list after deletion
    } else {
        alert("Item not found.");
    }
}

// Initial render when the page loads
renderList();







