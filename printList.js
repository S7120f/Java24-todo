
import deleteItem from "./deleteItem.js";

export default function printList() {

    todoList.innerHTML = "";

    // hämta 
    let todoItems = JSON.parse(localStorage.getItem("todoList"));

    for (let item of todoItems) {
        console.log("item", item);

        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        li.addEventListener("click", (e) => {
            console.log("click", e.target.id);
            deleteItem(e.target.id)
        })

        todoList.appendChild(li);
        
    }

};