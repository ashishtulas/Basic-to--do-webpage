function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("Please enter a task!");
        return;
    }
    var li = document.createElement("li");
    li.textContent = input;
    li.onclick = function() {
        this.parentNode.removeChild(this);
    };
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = '';
}
