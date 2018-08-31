import { Router } from 'express';

const protectedResourceFilter = Router();

protectedResourceFilter.use((req, res, next) => {
    console.log("Protected resource filter...");
    if (true) {
        var err = new Error("Unauthorized access!");
        err.status = 401;
        next(err);
    } else {
        next();
    }
});

export default protectedResourceFilter;