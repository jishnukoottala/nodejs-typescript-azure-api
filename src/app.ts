import express, { Request, Response } from "express";
const app: express.Application = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/:name", (req: Request, res: Response) => {
  res.send(`Hello , ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
