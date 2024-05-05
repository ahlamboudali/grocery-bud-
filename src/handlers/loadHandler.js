import data from '../data.js';
import dom from '../dom.js';
import createItem from '../components/createItem.js';
const loadHandler = () => {
    data.items.forEach((item) => {
        const container = createItem(item);

        dom.todos.append(container);
    });
};

export default loadHandler;
