import { Router } from 'express';
import { logger } from '../utils/AppUtils';

const requestLogFilter = Router();

requestLogFilter.use("*", (req, res, next) => {
 logger().log("Requested URL: ", req.originalUrl);
 next();
});

export default requestLogFilter;