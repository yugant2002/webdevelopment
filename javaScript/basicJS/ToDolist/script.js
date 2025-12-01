function AddTask() {
    const task = document.getElementById("New Task").value();

    console.log(task);

    const l = document.createElement("li");
    l.classList.add("p-2", "d-flex", "align-item-centre", "fs-5", "border-bottom");

    const d = document.createElement("div");
    d.classList.add("w-75");

    d.innerText = task;

    const b = document.createElement("button")
    b.classList.add("btn","btn-danger" ,"ms-3");
    b.onclick = () => {
        l.remove();
    };
    l.appendChild(d);
    l.appendChild(b);

    document.getElementById("TaskList").appendChild(l);
    document.getElementById("")


}