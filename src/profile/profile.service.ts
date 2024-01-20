import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entity/profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entity/user';
import { CreateDto } from './dto/createProfile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private userRepository: Repository<ProfileEntity>,
  ) {}

  async createProfile(data: CreateDto, id: any) {
    const profile = new ProfileEntity();
    profile.user = id;
    profile.addres = data.addres;
    profile.contact = data.contact;
    profile.gender = data.gender;
    profile.hobby = data.hobby;
    return await this.userRepository.save(profile);
  }
  async getAllUser() {
    const users = await this.userRepository.find({
      relations: {
        user: true,
      },
    });

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
          name: user.user.name,
        },
      };
    });

    return filteredUsers;
  }
}
