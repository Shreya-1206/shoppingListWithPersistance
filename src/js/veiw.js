import Item from "./Item";
import { getShoppingList, getCompletedList } from "./model";

const shoppingDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

export const renderShoppingList = () => {
    const domNodes = getShoppingList().map(({item, priority,id}) => {
        return Item(item, priority,id);
    });

    shoppingDiv.innerHTML = domNodes.join('');
};

export const renderCompletedList = () => {
    const domNodes = getCompletedList().map(({item, priority, id}) => {
        return Item(item, priority,id);
    });
    completedDiv.innerHTML = domNodes.join('');

};