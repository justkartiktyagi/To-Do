let todoList =[];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem , date: todoDate});
    inputElement.value = ''; 
    dateElement.value = ''; 

    displayItems();
}
function displayItems()
{
    let containerElements = document.querySelector('.todo-container')
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++){
        let todoItem = todoList[i].item;
        let todoDate= todoList[i].date; 
        newHtml += `
            <span>${todoItem}</span>
            <span>${todoDate}</span>
            <button class="btn-delete" onclick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        `;
    }
    a = newHtml;
    containerElements.innerHTML = a;
}

