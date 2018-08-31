import { Router } from 'express';

const toDoRouter = Router();

const mockData = [
  { id: 1, value: "To Do 1", read: true },
  { id: 2, value: "To Do 2", read: false },
  { id: 3, value: "To Do 3", read: false }
]

toDoRouter.get("/", (req, res) => {
  res.json({toDoList: mockData});
});

toDoRouter.get("/error", (req, res, next) => {
  var err = new Error("Intentionally triggered error!");
  err.status = 500;
  next(err);
});

toDoRouter.get("/create/:uuid", (req, res) => {
  let uuid = req.params.uuid;
  res.json({ uuid: uuid });
});

toDoRouter.delete("/delete/:uuid", (req, res) => {
  res.json({message: "Delete ToDoList!"});
});

export default toDoRouter;
