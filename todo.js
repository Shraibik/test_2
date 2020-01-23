
function onPageLoaded() {
    let input = document.querySelector("input[type='text']");
    let ul = document.querySelector("ul.todo-list");
    let tasks =  Array.from(document.querySelectorAll("ul.todo-list li"));
    let tasksStatus = [];
    let checkAllButton = document.querySelector(".check-all-btn");
    let clearCompletedButton =document.querySelector(".clear-completed-btn"); 
    
    function createTodo() {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        let textSpan = document.createElement("span");
        let trashSpan = document.createElement("span");

        checkbox.type = "checkbox";
        textSpan.classList.add("todo-text");
        textSpan.append(input.value);
        trashSpan.classList.add("todo-trash");
        trashSpan.append("Delete");
        listenDeleteTodo(trashSpan);
        listenCheckTodo(checkbox);
        li.append(checkbox, textSpan, trashSpan);
        tasks.push(li);
        tasksStatus.push(false);
        ul.append(li);

        input.value = "";
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", () => {
            let index = tasks.indexOf(element.parentElement);
            tasks.splice(index, 1);
            tasksStatus.splice(index, 1);
            $(ul).empty();
            tasks.forEach((elem) => {ul.append(elem)});
        });
    }

    function listenCheckTodo(element) {
        element.addEventListener("click", () => {
            this.checked;
            let index = tasks.indexOf(element.parentElement);
            tasksStatus[index] = !tasksStatus[index];
        });
    }

    tasks.forEach((elem) => {
        let checkboxStatus = false;
        if (elem.querySelector('input[type="checkbox"]').checked) {
            checkboxStatus = true;
        }
        tasksStatus.push(checkboxStatus);
    });

    input.addEventListener("keypress", (keyPressed) => {
        let keyEnter = 13;
        if ((keyPressed.which == keyEnter) && (input.value !== "")) {
            createTodo();
        }
    });

    checkAllButton.addEventListener("click", () => {
        let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
        checkboxes.forEach((elem) => {
            $(elem).prop('checked', true);;
        });
        tasksStatus = tasksStatus.map(() => true);
    });

    clearCompletedButton.addEventListener("click", () => {
        let indexes = [];

        tasksStatus.forEach((elem, index) => {
            if (elem) {indexes.push(index)}
        });
        tasks = tasks.filter((elem, index) => {
            return indexes.indexOf(index) == -1;
        });
        tasksStatus = tasksStatus.filter((elem, index) => {
            return indexes.indexOf(index) == -1;
        });
        $(ul).empty();
        tasks.forEach((elem) => {ul.append(elem)});
    });

    
}

document.addEventListener("DOMContentLoaded", onPageLoaded);