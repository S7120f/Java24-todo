import printList from "./printList.js";

let saveBtn = document.getElementById('saveBtn');

export default saveBtn.addEventListener("click", () => {
    console.log("click", newItem.value);

    //hämta data
    let todoItems = JSON.parse(localStorage.getItem("todoList"));
    //ändra data
    todoItems.push(newItem.value);
    //spara data
    localStorage.setItem("todoList", JSON.stringify(todoItems));

    newItem.value = "";

    
    console.log("Listan efter push", todoItems);
    printList();
})