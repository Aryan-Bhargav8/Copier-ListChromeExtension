

const inputBox = document.getElementById("url-box");

const List = document.getElementById("Elements");

const addButton = document.getElementById("addButton");

addButton.addEventListener('click', addTask);


function addTask() {
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
    // copy button version 1
//     copyButton.onclick = function() {
//         let copyText = li.innerHTML;
//         copyText.querySelector("button").addeventListener("click", function() {
//             let input = copyText.querySelector("button");
//             input.select();
//             document.execCommand("copy");
//             copyText.classList.add("active");

//     })
// }


    // copy button version 2
    copyButton.onclick = function() {
        let copyText = li.textContent;
        // let button = li.querySelector("button");
        // if (button) {
        //     li.removeChild(button);
        // }
        navigator.clipboard.writeText(copyText)
            .then(() => {
                console.log('Text copied to clipboard');
                li.classList.add("active");
            })
            .catch(err => {
                console.error('Error in copying text: ', err);
            });
    }



    // copy button version 3
    // copyButton.onclick = function() {
    //     // Clone the list item and remove the button from the clone
    //     let clone = li.cloneNode(true);
    //     let button = clone.querySelector("button");
    //     if (button) {
    //         clone.removeChild(button);
    //     }

    //     // Copy the text content of the clone
    //     let copyText = clone.textContent;
    //     navigator.clipboard.writeText(copyText)
    //         .then(() => {
    //             console.log('Text copied to clipboard');
    //             li.classList.add("active");
    //         })
    //         .catch(err => {
    //             console.error('Error in copying text: ', err);
    //         });
    // }

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
localStorage.clear();

let clearButton = document.getElementById("clearButton");
clearButton.onclick = function() {
    localStorage.clear();
    Elements.innerHTML = '';
}