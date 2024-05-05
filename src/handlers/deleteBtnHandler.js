
import data from "../data.js";


const deleteBtnHandler = (id) => {
 // remove item from the dom : 
 const item = document.getElementById(id);
 if(item){
    item.remove();
 }

 // remove from data : 
 data.items = data.items.filter((item) => item.id !== id);
};

export default deleteBtnHandler;