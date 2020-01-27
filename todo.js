function onPageLoaded() {
    // let input = document.querySelector(".add-todo");
    // let ul = document.querySelector("ul.todo-list");
    // let tasks =  Array.from(document.querySelectorAll("ul.todo-list li"));
    // let tasksStatus = [];
    // let checkAllButton = document.querySelector(".check-all-btn");

    
    let input = $(".add-todo");
    let ul = $("ul.todo-list");
    let tasks =  $.makeArray($(".todo-item"));
    let tasksStatus = $.makeArray();
    let checkAllButton = $(".check-all-btn");

    console.log(tasks);

    function createTodo() {
        let li = $("<li>");
        let div = $("<div>");
        //let checkbox = $("input");
        let textSpan = $("<span>");
        let trashSpan = $("<span>Delete</span>");

        $(li).addClass("todo-item");
        $(div).addClass("view");
        //checkbox.type = "checkbox";
        $(textSpan).addClass("todo-text");
        $(trashSpan).addClass("todo-trash");

        listenDeleteTodo(trashSpan);
        // listenCheckTodo(checkbox);
        // listenEditTodo(textSpan);

        $(div).append(textSpan, trashSpan);
        $(li).append(div);

        return li
    }

    function addTodoToEnd(element) {
        $(element).find(".todo-text").append($(input).val());
        $(ul).append(element);
        tasks.push(element);
        tasksStatus.push(false);
        $(input).val("");
        console.log(tasks);
        console.log(tasksStatus);
    }

    function listenDeleteTodo(element) {
        $(element).click(() => {
            //let index = tasks.indexOf($(element).parent().parent());
            let removingTodo = $(element).parent().parent()[0];
            let index;
            tasks.forEach((item, i) => {
                if (item[0] === removingTodo) index = i;
            });
            console.log(index);
            console.log($(element).parents(".todo-item"));
            tasks.splice(index, 1);
            tasksStatus.splice(index, 1);
            $(ul).empty();
            $(ul).append(tasks);
            console.log(tasks);
        });
    }

    // function listenCheckTodo(element) {
    //     element.addEventListener("click", () => {
    //         this.checked;
    //         let index = tasks.indexOf(element.parentElement.parentElement);
    //         tasksStatus[index] = !tasksStatus[index];
    //     });
    // }

    // function listenEditTodo(element) {
    //     element.addEventListener("dblclick", () => {
    //         let index = tasks.indexOf(element.parentElement.parentElement);
    //         let editTodoInput = document.createElement("input");

    //         editTodoInput.type = "text";
    //         editTodoInput.addEventListener("keypress", (keyPressed) => {
    //             let keyEnter = 13;
    //             if ((keyPressed.which == keyEnter) && (editTodoInput.value !== "")) {
    //                 let li = document.createElement("li");
    //                 let div = document.createElement("div");
    //                 let checkbox = document.createElement("input");
    //                 let textSpan = document.createElement("span");
    //                 let trashSpan = document.createElement("span");

    //                 div.classList.add("view");
    //                 checkbox.type = "checkbox";
    //                 textSpan.classList.add("todo-text");
    //                 textSpan.append(editTodoInput.value);
    //                 trashSpan.classList.add("todo-trash");
    //                 trashSpan.append("Delete");

    //                 listenDeleteTodo(trashSpan);
    //                 listenCheckTodo(checkbox);
    //                 listenEditTodo(textSpan);

    //                 div.append(checkbox, textSpan, trashSpan);
    //                 $(li).append(div);
    //                 tasks.splice(index, 1, li);
    //                 tasksStatus.splice(index, 1, true);
    //                 $(ul).empty();
    //                 $(ul).append(tasks);                   
    //             }
    //         });
    //         $(element.parentElement).replaceWith(editTodoInput);
    //     });
    // }

    tasks.forEach((elem) => {
        let checkboxStatus = false;
        if (elem.querySelector('input[type="checkbox"]').checked) {
            checkboxStatus = true;
        }
        tasksStatus.push(checkboxStatus);
    });

    $(input).keypress((keyPressed) => {
        let keyEnter = 13;
        if ((keyPressed.which == keyEnter) && (input.value !== "")) {
            addTodoToEnd(createTodo());
        }
    });

    // checkAllButton.addEventListener("click", () => {
    //     let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    //     checkboxes.forEach((elem) => {
    //         $(elem).prop('checked', true);;
    //     });
    //     tasksStatus = tasksStatus.map(() => true);
    // });

    // clearCompletedButton.addEventListener("click", () => {
    //     let indexes = [];

    //     tasksStatus.forEach((elem, index) => {
    //         if (elem) {indexes.push(index)}
    //     });
    //     tasks = tasks.filter((elem, index) => {
    //         return indexes.indexOf(index) == -1;
    //     });
    //     tasksStatus = tasksStatus.filter((elem, index) => {
    //         return indexes.indexOf(index) == -1;
    //     });
    //     $(ul).empty();
    //     $(ul).append(tasks);;
    // });
    
}

document.addEventListener("DOMContentLoaded", onPageLoaded);