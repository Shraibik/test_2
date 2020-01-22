
function onPageLoaded() {
    let input = document.querySelector("input[type='text']");
    let ul = document.querySelector("ul.todo-list");
    let trash = document.querySelectorAll(".todo-trash");
    let tasks =  Array.from(document.querySelectorAll("ul.todo-list li"));

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
        li.append(textSpan, trashSpan);
        tasks.push(li);
        tasks.forEach((li) => {ul.append(li);})

        input.value = "";
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            tasks.splice(tasks.indexOf(element.parentElement), 1)
            element.parentElement.remove();
        });
    }

    input.addEventListener("keypress", (keyPressed) => {
        let keyEnter = 13;
        if ((keyPressed.which == keyEnter) && (input.value !== "")) {
            createTodo();
        }
    });

    
}

document.addEventListener("DOMContentLoaded", onPageLoaded);