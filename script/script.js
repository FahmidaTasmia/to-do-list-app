//dom elements

const darkModeToggle = document.getElementById("dark-mode-toggle");


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


