const { getTasks, addTask, updateTask, deleteTask } = require('../models/todo.js');

const handleGetTasks = async (req, res) => {

    try {
        const tasks = await getTasks();

        res.status(200).json(tasks); //отправили ответ в формате json со статусом ответа 200
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

const handleAddTask = async (req, res) => {

    try {
        const task = req.body;

        const addedTask = await addTask(task);

        res.status(200).json(addedTask)
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

const handleUpdateTask = async (req, res) => {

    try {
        const { id } = req.params; // req.params когда их URL что-то достаем
        const dataToUpdate = req.body // получаем тело запроса

        const updateTodo = await updateTask(id, dataToUpdate)

        res.status(200).json(updateTodo)
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

const handleDeleteTask = async (req, res) => {

    try {
        const { id } = req.params;

        const deletedTask = await deleteTask(id)

        res.status(200).json(deletedTask);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}



module.exports = {
    handleGetTasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
}


