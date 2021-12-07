let tasks = {}

$(".description").on("click", "p", function() {
    const taskText = $(this).text().trim()
    const taskInput = $("<textarea>").val(taskText)
    $(this).replaceWith(taskInput)
    taskInput.trigger("focus")
})

$(".description").on("blur", "textarea", function() {
    const taskText = $(this).val().trim()
    const taskP = $("<p>").text(taskText)
    $(this).replaceWith(taskP)
})

$(".saveBtn").on("click", function(){
    const taskId = $(this).attr("id").replace("save", "hour")

    let taskText = $(`#${taskId}`).val()
    tasks[taskId] = taskText

    saveTasks()
})

const saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))

    if (!tasks) {
        tasks = {
            hour9: "", hour10: "", hour11: "", hour12: "", hour13: "", hour14: "", hour15: "", hour16: "", hour17: ""  
        }
    }

    for(const task in tasks) {
        $("#"+task).find(".taskP").text(tasks[task])
    }
}

const currentDay = moment().format("MMM Do YYYY")
$("#currentDay").text(currentDay)

loadTasks()