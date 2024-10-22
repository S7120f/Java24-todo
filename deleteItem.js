import printList from "./printList.js";

export default function deleteItem(item) {
    

    //hämta 
    let todoItems = JSON.parse(localStorage.getItem("todoList"));
    //ändra
    todoItems.splice(todoItems.indexOf(item), 1);
    //spara
    localStorage.setItem("todoList", JSON.stringify(todoItems));

    printList();
}