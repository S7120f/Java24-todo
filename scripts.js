import printList from "./printList.js";
import saveBtnEvent from "./saveBtn.js";
import deleteItemEvent from "./deleteItem.js";

let todoList = document.getElementById('todoList');
let newItem = document.getElementById('newItem');
let saveBtn = document.getElementById('saveBtn');

console.log("newItem" , newItem);

if (!localStorage.getItem("todoList")) {
    console.log("LS existerar inte! skapa ett nytt")
    let todoItems = ["Loopa alla items", "Lägga till nya items", "ta bort en item", "Används localStorage", "dela upp koden i moduler"];
    localStorage.setItem("todoList", JSON.stringify(todoItems));
    console.log(localStorage.getItem("todoList"));

} else {
    console.log("LS existerar! hämta listan")
}

printList();


