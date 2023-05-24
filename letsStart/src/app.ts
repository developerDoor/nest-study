import * as express from "express";
import catsRouter from './cats/cats.route'

const app: express.Express = express();
const port: number = 3000;

// 싱글톤 패턴
// 최초의 한번 New 연산자를 통해서 인스턴스를 생성한다. 추후 객체에 접근을 할 때 메모리 낭비를 방지할 수 있다.
// 또한 다른 클래스간의 데이터 공유가 쉽다.

class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        this.app.use(catsRouter);
    }

    private setMiddleware() {
        // 로깅 미들웨어
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });

        // JSON 미들웨어
        this.app.use(express.json());

        this.setRoute();

        // 404 미들웨어
        this.app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log("this is error middleware");
            res.send({error: "404 not found error"});
        });
    }

    public listen() {
        this.setMiddleware();
        this.app.listen(port, () => {
            console.log(`server is on ${port}`);
        });
    }

}

function init() {
    const server = new Server();
    server.listen();
}

init();
