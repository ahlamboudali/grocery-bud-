import dom from "../dom.js";
import clearAllHandler from "../handlers/clearAllHandler.js";
const clearAllEvent = () => {
    dom.clearBtn.addEventListener('click', clearAllHandler);
};

export default clearAllEvent; 