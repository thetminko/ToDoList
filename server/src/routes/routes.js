import express from 'express';
import toDoRouter from './protected_routes/todolist.routes';
import protectedResourceFilter from '../filters/protected.resource.filter';
import loginRouter from './public_routes/login.routes';


var routers = express();

routers.use("/login", loginRouter);

routers.use(protectedResourceFilter);


/*
To enable CORS
*/
routers.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* ----------------------- ROUTES ------------------------- */
routers.use("/", toDoRouter);


/* ----------------------- GLOBAL HANDLERS ------------------------- */

/*
To handle 404
*/
routers.use((req, res, next) => {
    let error = new Error("Not Found!");
    error.status = 404;
    next(error);
});

/*
To handle errors
*/
routers.use((err, req, res, next) => {
    if (err.status === 401) {
      err.message = "Please login first!";
    }

    if (!err.message) {
        err.message = "Something went wrong!";
    }

    res.status(err.status).json({
        message: err.message
    });
});


export default routers;