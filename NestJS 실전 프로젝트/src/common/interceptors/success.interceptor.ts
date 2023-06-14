import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        //console.log('Before..') before의 경우에는 미들웨어단에서 처리하는 경우가 많기때문에 주석처리
        // 인터셉터는 컨트롤러가 반환하는 결과값을 가로채서 가공해서 필터처럼 사용할 수 있다.
        const now = Date.now()
        return next
            .handle()
            .pipe(map((data) => ({ // 여기서  data는 컨트롤러단에서 넘겨준 데이터가 들어온다고 생각하자.
                success: true,
                data,
            })));
    }
}
