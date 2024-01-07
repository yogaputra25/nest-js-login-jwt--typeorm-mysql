import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entity/profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entity/user';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(ProfileEntity) private userRepository: Repository<ProfileEntity>) { }

        async createProfile(data:ProfileEntity, id: any){
            data.user = id
            return await this.userRepository.save(data)
        }
        async getAllUser(){
            const users=  await this.userRepository.find({
                relations: {
                    user: true
                }
            })

            const filteredUsers = users.map((user) => {
                return {
                    id: user.id,
                    hobby: user.hobby,
                    gender: user.gender,
                    addres: user.addres,
                    contact: user.contact,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    user: {
                        id: user.user.id,
                        name: user.user.name
                    },
                };
            });

            return filteredUsers
        }
}
