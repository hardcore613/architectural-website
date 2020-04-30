// UI form element
const form = document.getElementById('form');
// UI input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}  

/* ---------- UI ----------*/

//show alert message
function showAlert(message, className){
    //clear nay remaining alerts
    this.clearAlert();
    //Create a div
    const div = document.createElement('div');
    //Add class
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.getElementById('form');
    //get search box
    const button = document.querySelector('.confirmed');
    //Insert alert
    insertAfter(button,div);

    //Timeout after 3 seconds
    setTimeout(() => {
        this.clearAlert();
    }, 3000);
}

//clear alert message
function clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
        currentAlert.remove();
    }
}

// Event listeners

form.addEventListener('submit', logSubmit);

// Event listeners functions

function logSubmit(event) {
    event.preventDefault();

    showAlert('MESSAGE WAS SENT!', 'alert');
    
    // Data to be sent to the server - JS Object
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    // Set up server connection

    const xhr = new XMLHttpRequest();

    const testing = 'http://127.0.0.1:8080/email'// end point of server

    xhr.open('POST', testing, true);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(data));

    // once form submitted, reset inputs
    document.getElementById("form").reset();
    
}

