import * as express from "express";
import catsRouter from './cats/cats.route'

const app: express.Express = express();
const port: number = 3000;

// 로깅 미들웨어
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware");
    next();
});

// JSON 미들웨어
app.use(express.json());

app.use(catsRouter);

// 404 미들웨어
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("this is error middleware");
    res.send({error: "404 not found error"});
});

app.listen(port, () => {
    console.log(`server is on ${port}`);
});
