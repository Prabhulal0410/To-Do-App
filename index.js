let inputTask = document.getElementById("task");
let addTaskBtn = document.getElementById("addTaskBtn");
let list = document.getElementById("taskList");

function addTask() {
    if (inputTask.value.trim() !== "") {
        let li = document.createElement("li");

        let taskText = document.createElement("span");
        taskText.innerText = inputTask.value;

        let editBtn = document.createElement("button");
        editBtn.innerText = "✏️ Edit";
        editBtn.classList.add("edit"); // Add class for styling

        let done = document.createElement("button");
        done.innerText = "✅ Done";
        done.classList.add("done"); // Add class for styling
        done.addEventListener("click", function () {
            if (taskText.style.textDecoration === "line-through") {
                taskText.style.textDecoration = "none";
                li.insertBefore(editBtn, done);
            } else {
                taskText.style.textDecoration = "line-through";
                li.removeChild(editBtn);
            }
        });

        editBtn.addEventListener("click", function () {
            if (taskText.style.textDecoration === "line-through") return;
            let inputEl = document.createElement("input");
            inputEl.value = taskText.innerText;

            let saveBtn = document.createElement("button");
            saveBtn.innerText = "💾 Save";
            saveBtn.classList.add("save"); // Add class for styling
            saveBtn.addEventListener("click", function () {
                if (inputEl.value.trim() === "") {
                    alert("Task cannot be empty!");
                    return;
                }

                taskText.innerText = inputEl.value;
                li.innerHTML = "";
                li.appendChild(taskText);
                li.appendChild(editBtn);
                li.appendChild(done);
                li.appendChild(removeBtn);
            });

            li.innerHTML = "";
            li.appendChild(inputEl);
            li.appendChild(saveBtn);
            inputEl.focus();
        });

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "❌";
        removeBtn.classList.add("remove"); 
        removeBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(done);
        li.appendChild(removeBtn);
        list.appendChild(li);

        inputTask.value = "";
    } else {
        alert("Please enter a task!");
    }
}

addTaskBtn.addEventListener("click", addTask);
inputTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
