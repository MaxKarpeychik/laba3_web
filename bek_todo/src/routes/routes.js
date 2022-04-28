const express = require('express');
const { handleGetTasks, handleAddTask, handleUpdateTask, handleDeleteTask } = require('../controllers/controllers.js'); //Импортируем контроллеры (обработчики, функции которые будут что что то делать и отправлять ответ)

const routes = express();

routes.get('/', handleGetTasks); // смотрим на метод запроса и адрес на который пришёл запрос

routes.post('/', handleAddTask) // '/' - относительный адрес, к нему в начало допишется heroku...

routes.patch('/:id', handleUpdateTask);

routes.delete('/:id', handleDeleteTask);


module.exports = routes; // module чтобы другие файлы могли их импортировать к себе, потому что каждый файл - модуль