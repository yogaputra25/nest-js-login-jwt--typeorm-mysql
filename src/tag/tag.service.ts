import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tags } from './entity/tags.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagService {
    constructor( @InjectRepository(Tags) private tagRepository: Repository<Tags>){}

    async getAllTag(){
        return await this.tagRepository.find()

    }

}
