const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBnt = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
 
    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    })
    searchBnt.addEventListener("click", () =>{
        sidebar.classList.remove("close");
    })

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerHTML = "Modo Escuro"
        }
        else{
            modeText.innerHTML = "Modo Claro"
        }
    })