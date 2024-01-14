import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/createuser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>) { }

    async getUser() {
        return await this.userRepository.find({relations: {product: true}});
    }
 
    async deleteUser(id) {
        const data= {
            "status": `Delete data ${id.id}`
        }
        await this.userRepository.delete(id)
        return data
        
    }

    async createUser(data: CreateDto) {
        return await this.userRepository.save(data);
        
    }

    async getUserOne(query: object ) {
        return await this.userRepository.findOne(query)
        

        
    }
    
}
