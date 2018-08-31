import { Router } from 'express';
import { isLoggedIn, logger } from '../utils/AppUtils';

const protectedResourceFilter = Router();

protectedResourceFilter.use((req, res, next) => {
    logger().log("Protected resource filter...");
    if (!isLoggedIn(req.cookies)) {
        var err = new Error("Unauthorized access!");
        err.status = 401;
        next(err);
    } else {
        next();
    }
});

export default protectedResourceFilter;