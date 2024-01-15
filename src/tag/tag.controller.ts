import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private tagService: TagService){}

    @Get()
    async getAllTag(){
        return this.tagService.getAllTag()
    }

}
