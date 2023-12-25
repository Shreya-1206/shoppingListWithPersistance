//data modification 

let shoppingList = [];
let completedList = [];

//function to add item to array
export const addToShoppingList = item => {
    const itemId = `${parseInt(Math.random() * 1000000)}-${new Date().getTime()}`;

    shoppingList.push({
        id : itemId,
        item,
        priority : 'high',
    });
};

export const setPriority = (itemId, priority)=>{
  shoppingList= shoppingList.map((item)=>{
    if(item.id === itemId){
        return {
            ...item,
            priority
        };
    }
    return item;
  });
};

export const removeItem = itemId => {
    const confirm = window.confirm("Do you really want to delete this item ?");
    if(confirm) {
       shoppingList = shoppingList.filter(({id}) => id !== itemId);
       return true;
    }
    return false;
};

export const addItemToCompleted = itemId => {
    const findItem = shoppingList.find(({id}) => id === itemId);
    shoppingList = shoppingList.filter(({id}) => id !== itemId);
    completedList = [findItem, ...completedList];
    
}
//getting the function
export const  getShoppingList  = () => shoppingList;
export const getCompletedList = () => completedList;
export const clearCompleted = () => (completedList = []);