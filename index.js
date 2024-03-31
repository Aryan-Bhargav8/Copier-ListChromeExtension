

const inputBox = document.getElementById("url-box");

const List = document.getElementById("Elements");

const addButton = document.getElementById("addButton");

addButton.addEventListener('click', addLink);


function addLink() {
    let url = inputBox.value;
    if (url) {
        let li = document.createElement("li");
        li.innerHTML = url;

    // Create a button and add it to the list item
    let button = document.createElement("button");
    button.innerHTML = "X";
    button.id = "delete-button";
    button.onclick = function() {
        List.removeChild(li);
        saveList();
    }
    li.appendChild(button);

    // creating a button to copy the link
    let copyButton = document.createElement("button");
    copyButton.innerHTML = "&#10063;";
    copyButton.id = "copy-button";


    // copy button version 2
    copyButton.onclick = function() {
        let copyText = li.textContent;

        navigator.clipboard.writeText(copyText)
            .then(() => {
                console.log('Text copied to clipboard');
                li.classList.add("active");
            })
            .catch(err => {
                console.error('Error in copying text: ', err);
            });
    }



    li.appendChild(copyButton);

    List.appendChild(li);
    inputBox.value = "";  
    saveList();
    }
}

function saveList() {
    let list = Elements.innerHTML;
    localStorage.setItem("Links", list);
}

function loadList() {
    let list = localStorage.getItem("Links");
    if (list) {
        Elements.innerHTML = list;
    }
}


loadList();

let clearButton = document.getElementById("clearButton");
clearButton.onclick = function() {
    localStorage.clear();
    Elements.innerHTML = '';
}