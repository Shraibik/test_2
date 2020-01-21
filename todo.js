
function onPageLoaded() {
    const input = $("input[type='text']");
    const ul = $("ul.todo-list");

    function createTodo() {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);

        ul.appendChild(li).append(textSpan);
        input.value = "";
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);