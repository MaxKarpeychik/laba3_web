const express = require('express'); // фремворк, для облегчения работы с запросами и создания сервера
const mongoose = require('mongoose'); // - это библиотека JavaScript, часто используемая в приложении Node.js с базой данных MongoDB.
const cors = require('cors'); // CORS — это функция безопасности браузера, которая ограничивает перекрестные HTTP-запросы с другими серверами и указывает, какие домены получают доступ к вашим ресурсам
const routes = require('./routes/routes.js'); //импортируем роуты

const server = express();
const PORT = 5000;
// const db = 'mongodb+srv://Max_Karpeychik:MONGOparol00@cluster0.t2d9f.mongodb.net/todo?retryWrites=true&w=majority'; // строка для подключения к БД
const db = 'mongodb+srv://Max_Karpeychik:25122001maks@cluster0.wkqr9.mongodb.net/todo?retryWrites=true&w=majority';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) // устанавливает топологию для подключения к MongoDB (useUnifiedTopology: true), а во-вторых, устанавливает использование нового парсера (useNewUrlParser: true) для парсинга адреса сервера MongoDB.
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.log(error));

server.listen(process.env.PORT || PORT, (error) => { // говорим серверу слушать определенный порт

    if (error) {
        console.log(error)
    }
    else {
        console.log(`listening port ${PORT}`);
    }
});

server.use(cors()); //промежуточное ПО для cors, позволяющее совместно использовать ресурсы между источниками
server.use(express.urlencoded({ extended: false })); //чтобы мы могли получить данные из строки запроса///     чтобы расшифровывать  URL на который пришёл запрос И доставать оттуда данные/////парсера применяется функция urlencoded(). В эту функцию передается объект, устанавливающий параметры парсинга. Значение extended: false указывает, что объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива.
server.use(express.json()); // чтобы расшифровать полученный боди, чтобы в контроллере он пришел как json/////

server.use(routes); // подключаем роуты

server.use((req, res) => {  // если ни один роут не отправит ответ, то отправим ошибку

    res.status(404).json({ error: 'error 404' })
});