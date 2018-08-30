import server from './routes';

const APP_CONFIG = {
    "cors-allow-origin": "*",
    "cors-allow-headers": "Origin, X-Requested-With, Content-Type, Accept",
    "port": 2000
}

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
To handle errors
*/
server.use((err, req, res, next) => {

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



/* ----------------------- SERVER START UP CONFIG ------------------------- */

server.listen(APP_CONFIG.port, () => {
    console.log("Server has started at port: ", APP_CONFIG["port"]);
});