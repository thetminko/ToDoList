import express from 'express';
import cookieParser from 'cookie-parser';
import loginRouter from './routes/public_routes/login.routes';
import protectedResourceFilter from './filters/protected.resource.filter';
import toDoRouter from './routes/protected_routes/todolist.routes';
import requestLogFilter from './filters/request.log.filter';
import logoutRouter from './routes/public_routes/logout.routes';
import { logger } from './utils/AppUtils';

const SERVER_CONFIG = {
    "cors-allow-origin": "*",
    "cors-allow-headers": "Origin, X-Requested-With, Content-Type, Accept",
    "port": 2000
}

var server = express();

/* ----------------------- REGISTERING PRE MIDDLEWARES ------------------------- */
server.use(cookieParser());

// CORS Config middleware - Can be replaced with Cors() library
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});

// Request logging middleware
server.use(requestLogFilter);


/* ----------------------- END OF REGISTERING PRE MIDDLEWARES ------------------------- */







/* ----------------------- ROUTES ------------------------- */

// Public resource routers
server.use("/login", loginRouter);
server.use("/logout", logoutRouter);

// Protected resource filters
server.use(protectedResourceFilter);

// Protected resource routers
server.use("/", toDoRouter);


/* ----------------------- END OF ROUTES ------------------------- */








/* ----------------------- REGISTERING POST MIDDLEWARES ------------------------- */

// 404 Handler
server.use((req, res, next) => {
    let error = new Error("Not Found!");
    error.status = 404;
    next(error);
});

// Handle unexpected errors
server.use((err, req, res, next) => {
    if (err.status === 401) {
      err.message = "Please login first!";
    }

    if (!err.status) {
        err.status = 500;
    }

    if (!err.message) {
        err.message = "Something went wrong!";
    }

    res.status(err.status).json({
        message: err.message
    });
});

/* ----------------------- END OF REGISTERING POST MIDDLEWARES ------------------------- */








/* ----------------------- SERVER START UP CONFIG ------------------------- */

server.listen(SERVER_CONFIG["port"], () => {
    logger().log("Environment: ", process.env);
    logger().log("Server has started at port: ", SERVER_CONFIG["port"]);
});

/* ----------------------- END OF SERVER START UP CONFIG ------------------------- */
