import Item from "./Item";
import { addToShoppingList, setPriority, removeItem, addItemToCompleted,clearCompleted} from "./model";
import { renderShoppingList,renderCompletedList } from "./veiw";
const shoppingDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const inputItem = document.querySelector("input[name = 'itemInput']");
const clearCompletedBtn = document.querySelector('#clear-completed');

inputItem.addEventListener('keyup', function(evt) {
   if(evt.key === 'Enter') {
    //adding item
     addToShoppingList(this.value);
   //updating ui
   renderShoppingList();
     this.value ='';
   }
});

shoppingDiv.addEventListener('click', function(evt){
    if(evt.target.parentElement.classList.contains('priority-control')) {
        const priority = evt.target.classList.value;
        const itemId= evt.target.parentElement.parentElement.getAttribute('data-id');
         
        setPriority(itemId, priority);
        
        renderShoppingList();
    }

    if(evt.target.classList.contains('remove-btn')) {
        const itemId = evt.target.parentElement.getAttribute('data-id');
        const confirm = window.confirm("Do you really want to delete this item ?");
    if(confirm) {
        removeItem(itemId);
        renderShoppingList();
    }
    
  } 

});

shoppingDiv.addEventListener('dragstart', function(evt) {
    if (evt.target.classList.contains('item')) {
        const getId = evt.target.getAttribute('data-id');
        evt.dataTransfer.setData("text/plain", getId);

    };
});

completedDiv.addEventListener('drop', function(evt) {
   const itemId = evt.dataTransfer.getData('text/plain');

   if (itemId) {
    ///addin it to completed div
    addItemToCompleted(itemId);
    //updating shopping list
    renderShoppingList();
    //update Completed task list
    renderCompletedList();
   }

});

completedDiv.addEventListener('dragover', function (evt) {
    evt.preventDefault();
});

clearCompletedBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
  clearCompleted();
  renderCompletedList();
})

