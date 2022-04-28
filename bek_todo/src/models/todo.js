const mongoose = require('mongoose'); // mongoose - для связи с бд

const todoSchema = new mongoose.Schema({ // схема того, как мы будем хранить данные в бд
  text: {
    type: String,
    required: true,
  },
  isRemoved: {
    type: Boolean,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

const dataBase = mongoose.model('Todo', todoSchema); // dataBase это объект который позволяет нам взаимодействовать с бд,возвращает нам его mongoose.model('Todo', todoSchema); сюда мы передаем схему наших данных


const getTasks = async () => {

  return dataBase.find();
}

const addTask = async (taskData) => {

  return dataBase.create(taskData);
}

const updateTask = async (_id, dataToUpdate) => {

  return dataBase.findByIdAndUpdate(_id, dataToUpdate, { new: true }); // new: true чтобы вернуть полностью обновленный объект
}

const deleteTask = async (_id) => {

 return dataBase.findByIdAndDelete(_id);
}

module.exports = { 
  getTasks,
  addTask,
  updateTask,
  deleteTask,
}
