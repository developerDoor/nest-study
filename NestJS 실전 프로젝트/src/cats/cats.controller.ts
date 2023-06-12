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
    UseFilters
} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {HttpExceptionFilter} from "../http-exception.filter";
import {PositiveIntPipe} from "../common/pipes/positiveInt.pipe";


@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    // cats/
    @Get()
    getAllCat(){
        throw new HttpException('api broken', 401)
        return 'get all cat api';
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
