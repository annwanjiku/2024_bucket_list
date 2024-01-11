let button = document.getElementById("add_button")
let ulTag = document.querySelector("ul")

button.addEventListener("click",()=>{
    adding()
});

function adding(){
    let input = document.querySelector("input").value
    let item = document.createElement("li");
    let remove = document.createElement("button")
    if (input !== ""){
    item.textContent=input
    remove.textContent = "-"
    ulTag.appendChild(item)
    item.appendChild(remove)
    }

    remove.addEventListener("click",()=>{
        ulTag.removeChild(item)
    })

    document.querySelector("input").value="";
}

