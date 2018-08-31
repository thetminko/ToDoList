import { Router } from 'express';

const loginRouter = new Router();

loginRouter.get("/", (req, res) => {
    res.send("Login...");
});

export default loginRouter;