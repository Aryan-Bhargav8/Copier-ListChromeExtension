

const inputBox = document.getElementById("url-box");

const List = document.getElementById("Elements");


function addTask() {
    let url = inputBox.value;
    if (url) {
        let li = document.createElement("li");
        li.innerHTML = url;
        List.appendChild(li);
        inputBox.value = "";  
        // li.innerText = url;
        // List.appendChild(li);
        // inputBox.value = "";
    }
}