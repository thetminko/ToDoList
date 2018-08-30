import server from './routes/routes';

const APP_CONFIG = {
    "cors-allow-origin": "*",
    "cors-allow-headers": "Origin, X-Requested-With, Content-Type, Accept",
    "port": 2000
}


/* ----------------------- SERVER START UP CONFIG ------------------------- */

server.listen(APP_CONFIG.port, () => {
    console.log("Server has started at port: ", APP_CONFIG["port"]);
});