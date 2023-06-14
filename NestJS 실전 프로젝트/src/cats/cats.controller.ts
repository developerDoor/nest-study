import {
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    UseFilters, UseInterceptors
} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {HttpExceptionFilter} from "../common/exceptions/http-exception.filter";
import {PositiveIntPipe} from "../common/pipes/positiveInt.pipe";
import {SuccessInterceptor} from "../common/interceptors/success.interceptor";


@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    // cats/
    @Get()
    getAllCat(){
        console.log('hello controller')
        return { cats : 'get all cat api'}
    }

    // cats/:id
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number){
        console.log(param)
        //console.log(typeof param)
        return 'get one cat api';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat(){
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat(){
        return ' update';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete service';
    }
}
