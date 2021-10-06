addTask("Buy Milk");
addTask("Learn to wrap gifts", 1639944400000);

function addTask(description, dueTime) {
    const taskList = document.getElementById('task_list');
    const Li = document.createElement('li');
    taskList.append(Li);
    Li.textContent = description;

    if(dueTime){
        const NewdueTime = document.createElement('span');
        NewdueTime.classList.add('due');
        Li.append(NewdueTime);
        var timestamp = new Date(dueTime);
        NewdueTime.textContent = "due" + " " + timestamp.toLocaleDateString() + " " +timestamp.toLocaleTimeString(0);}
    
    const Button = document.createElement('button');
    Button.textContent = "Done";
    Li.append(Button);
    Button.addEventListener('click', () => {
    Button.parentElement.remove()})
    Button.classList.add('btn', "btn-outline-danger", "done")
    document.getElementById("task_description_input").value = ""
}


function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; 
    const dueTime = timeInputElement.valueAsNumber; 
    if(dueDate && dueTime) { 
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    }
}

const inputButton = document.getElementById('add_task');
inputButton.addEventListener("click", () => {
    var description = document.getElementById("task_description_input").value;
    var inputDueDate= document.getElementById('duedate_input');
    var inputDueTime = document.getElementById('duetime_input');
    var dueTime = dateAndTimeToTimestamp(inputDueDate, inputDueTime);
addTask(description, dueTime);})


const descriptionField = document.getElementById("task_description_input");
descriptionField.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    var description = document.getElementById("task_description_input").value;
    var inputDueDate= document.getElementById('duedate_input');
    var inputDueTime = document.getElementById('duetime_input');
    var dueTime = dateAndTimeToTimestamp(inputDueDate, inputDueTime);
    addTask(description, dueTime)}})
