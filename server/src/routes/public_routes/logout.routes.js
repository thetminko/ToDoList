import { Router } from 'express';
import { logger } from '../../utils/AppUtils';

const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
    res.cookie('authenticated', false);
    res.json({message: "Logged out!"});
    logger().log(req.cookies);
});

export default logoutRouter;