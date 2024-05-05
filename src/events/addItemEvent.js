import dom from '../dom.js';
import addItemHandler from '../handlers/addItemHandler.js';


const addItemEvent = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        addItemHandler(e);
    });
};

export default addItemEvent;
