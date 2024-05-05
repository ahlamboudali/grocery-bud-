import deleteBtnHandler from "../handlers/deleteBtnHandler.js";
import editBtnHandler from "../handlers/editBtnHandler.js";

const createItem = (item) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id;

    //title :
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text;

    //Buttons :
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // Edit Button :
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', () => {
        editBtnHandler(item);
    } )

    //Delete Button :
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        deleteBtnHandler(item.id);
    })



    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};
 


export default createItem;
 