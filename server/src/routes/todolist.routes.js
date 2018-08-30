import { Router } from 'express';

const toDoRouter = Router();

const mockData = [
  { id: 1, value: "To Do 1", read: true },
  { id: 2, value: "To Do 2", read: false },
  { id: 3, value: "To Do 3", read: false }
]

toDoRouter.get("/", (req, res, next) => {
  res.json({status: 200, message: "", data: mockData});
});

toDoRouter.get("/error", (req, res, next) => {
  next(new Error("Test error!"));
});

toDoRouter.get("/create/:uuid", (req, res) => {
  let uuid = req.params.uuid;
  res.json({ uuid: uuid });
});

toDoRouter.delete("/delete/:uuid", (req, res) => {
  res.send("Delete ToDoList!")
});

export default toDoRouter;
