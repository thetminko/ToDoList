import express from 'express';

import toDoRouter from './routes/todolist.routes';

const server = express();

/*
To enable CORS
*/
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* ----------------------- ROUTES ------------------------- */

server.use('/', toDoRouter);

export default server;
