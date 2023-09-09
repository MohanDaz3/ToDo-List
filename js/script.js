// getting all required elements

const inputField = document.querySelector(".input-field textarea");
const todoLists = document.querySelector(".todoLists");
const pendingNum = document.querySelector(".pending-num");
const clearButton = document.querySelector(".clear-button");

// we will call this function while adding,deleting and checking-unchecking the task

function allTasks(){
    let tasks = document.querySelector(".pending");

    // if tasks length is 0 then pending num text content will be no,if not then pending num value will be tasks length
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
     
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

// add tasks while enter the value in text area and press enter

inputField.addEventListener("keyup", (e)=>{
    let inputValue = inputField.value.trim();  //trim function will remove the white space of front and back of the entered value

    // if the enter button is clicked and inputed value lenth is greater than 0

    if(e.key === "Enter" && inputValue.length > 0){
        let liTag = `<li class="list pending" onclick="handlestatus(this)">
                    <input type="checkbox" />
                    <span class="task">${inputValue}</span>
                    <i class="uil uil-trash" onclick="delete(this)"></i>
                    </li>`;

        todoLists.insertAdjacentHTML("beforeend",liTag); //inserting li tag inside the todolist div
        inputField.value = "";  //removing value from input field
        allTasks();
    }
})

// checking and unchecking the checkbox while we click on the task

function handlestatus(e){
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false :true ;
    e.classList.toggle("pending");
    allTasks();
}

// deleting tasks while we click on the delete icon

function deleteTask(e){
    e.parentElement.remove(); //getting parent element and removing it 
    allTasks();
}

// deleting all the tasks while we click on the clear button

clearButton.addEventListener("click",()=>{
    todoLists.innerHTML = "";
    allTasks();
});