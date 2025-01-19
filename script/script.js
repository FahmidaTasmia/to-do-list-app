//dom elements

const darkModeToggle = document.getElementById("dark-mode-toggle");
const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const categorySelect = document.getElementById("category-select");
const searchBar = document.getElementById("search-bar");

//check local storage for dark mode preference

if(localStorage.getItem("dark-mode")==="enabled"){
    document.documentElement.classList.add("dark");
}
else{
    document.documentElement.classList.remove("dark");
}

//update the darkMode button icon

const updateIcon = ()=>{
    const icon = darkModeToggle.querySelector("i");
    if(document.documentElement.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon")
    }
};

// call tis function on load to ensure the correct icon is shown

updateIcon();

//dark mode toggle 
darkModeToggle.addEventListener("click", ()=>{
    const isDarkModeEnabled = document.documentElement.classList.toggle("dark");

    //update local storage

    if(isDarkModeEnabled){
        localStorage.setItem("dark-mode", "enabled");
    }
    else{
        localStorage.setItem("dark-mode", "disabled");
    }

    // update button icon 
    updateIcon();
});

// add a new Task

addTaskButton.addEventListener("click",()=>{
    const taskText = taskInput.value.trim();
    const taskCategory = categorySelect.value;

    if(!taskText)
        return;

    // create a new task Item
    const taskItem = document.createElement("li");
    taskItem.className="flex justify-between items center bg-gray-200 dark:bg-gray-700 p-2 rounded shadow cursor-move";
    taskItem.dataset.category = taskCategory;

    //add Task Content

    taskItem.innerHTML =`
    <span class="flex-1">${taskText}</span>
    <span class="text-sm  mr-3 text-gray-600 dark:text-gray-300">${taskCategory}</span>
    <div class="flex gap-4">
      <button class="complete-btn text-green-700"><i class="fas fa-check"></i></button>
      <button class="edit-btn text-orange-400"><i class="fas fa-edit"></i></button>
      <button class="delete-btn text-red-600"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;

    //Add Event Listener for task Actions
    //completeButton
    const completeButton = taskItem.querySelector(".complete-btn");
    completeButton.addEventListener("click", ()=>{
        taskItem.querySelector("span").classList.toggle("line-through");
    });

    //edit button
    const editButton = taskItem.querySelector(".edit-btn");
    editButton.addEventListener("click", ()=>{
        const newText = prompt("Edit Task", taskText);
        if(newText) taskItem .querySelector("span").textContent = newText;
    });

    //delete button
    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", ()=>{
        taskItem.remove();
    });

    //Append to task List
    taskList.appendChild(taskItem);
    taskInput.value=""; // clear Input

});


