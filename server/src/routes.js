import express from 'express';

import toDoRouter from './routes/todolist.routes';

const server = express();

/* ----------------------- ROUTES ------------------------- */

server.use('/', toDoRouter);



/* ----------------------- GLOBAL HANDLERS ------------------------- */
/*
To handle 404
*/
server.use((req, res, next) => {
    let error = new Error("Not Found!");
    error.status = 404;
    next(error);
});

/*
Global Error Handler
*/
server.use((err, req, res, next) => {

    if (!err.status) {
        err.status = 500;
    }

    if (!err.message) {
        err.message = "Something went wrong!";
    }

    res.json({ status: err.status, message: err.message });
});

export default server;
