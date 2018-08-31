import { Router } from 'express';

const loginRouter = new Router();

loginRouter.get("/", (req, res) => {
    res.send("Login...");
});

loginRouter.get("/mock", (req, res) => {
    res.cookie('authenticated', true);
    res.json({message: "Logged in!"});
});


export default loginRouter;