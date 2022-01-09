import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicPromiseDTO } from './DTO/PublicPromiseDTO';

@Controller('')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/api')
    public async getAll() {
        return await this.appService.getAll();
    }

    @Post('/api')
    public async create(@Body() publicPromiseDTO: PublicPromiseDTO) {
        return await this.appService.create(publicPromiseDTO);
    }
}
