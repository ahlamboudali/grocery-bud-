import dom from '../dom.js';

const editBtnHandler = (item) => {
    dom.submitBtn.innerText = 'Edit';
    dom.input.value = item.text;

    document.getElementById(item.id).classList.add('selected');
};

export default editBtnHandler;
