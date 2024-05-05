import data from '../data.js';
import dom from '../dom.js';
import createItem from '../components/createItem.js';

const addItemHandler = (e) => {
    e.preventDefault();
    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText;

    if (btnType === 'Submit') {
        if (!value) {
            dom.error.innerText = 'Add a value to your to-do list. ';
            return;
        } else {
            dom.error.innerText = '';
            const newItem = {
                id: data.items.length + 1,
                text: value,
            };

            const itemDom = createItem(newItem);
            dom.todos.prepend(itemDom);
            data.items.push(newItem);
            dom.input.value = '';
        }
    } else {
     const selectedItem = document.querySelector('.selected');
     selectedItem.querySelector('.title').innerText = value;
     const id = Number(selectedItem.id);
     const itemData = data.items.find((item) => item.id === id);
     itemData.text = value;
     dom.input.value = '';
     dom.submitBtn.innerText = 'Submit';
     selectedItem.classList.remove('selected');
    }
};
export default addItemHandler;
