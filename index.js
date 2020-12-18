
const addButotn = document.querySelector('.addBtn');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');


    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');

    }
