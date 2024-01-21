import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user';
import { Like, Repository } from 'typeorm';
import { CreateDto } from './dto/createuser.dto';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { PaginationDto } from 'src/dto/pagination.dto';
import { paginateResponse } from 'src/helper/pagination.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async dataAll(query: PaginationDto) {
    const take = query.take || 10; // 10
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const keyword = query.keyword || '';

    const data = await this.userRepository.findAndCount({
      where: { name: Like('%' + keyword + '%') },
      relations: { product: true },
      order: { name: 'DESC' },
      take: take,
      skip: skip,
    });
    return paginateResponse(data, page, take);
  }
  //   async paginate(options: IPaginationOptions): Promise<Pagination<User>> {
  //     const queryBuilder = this.userRepository.find()

  //     return paginate<User>(queryBuilder, options);
  //   }

  //   async dataAll(take: number = 10, skip: number = 0) {
  //     const [data, total] = await this.userRepository.findAndCount({
  //       take,
  //       skip,
  //     });
  //     return { data, total };
  //   }
  // Dengan pagination
  //   async dataAll(paginationQuery: PaginationDto): Promise<any> {
  //     return this.userRepository.findAndCount({
  //       skip: paginationQuery.page,
  //       take: paginationQuery.limit,
  //       order: { [paginationQuery.orderBy]: paginationQuery.order },
  //     });
  //   }
  //tanpa pagination
  async getUser(): Promise<User[]> {
    return await this.userRepository.find({ relations: { product: true } });
  }

  async deleteUser(id) {
    const data = {
      status: `Delete data ${id.id}`,
    };
    await this.userRepository.delete(id);
    return data;
  }

  async createUser(data: CreateDto) {
    return await this.userRepository.save(data);
  }

  async getUserOne(query: object) {
    return await this.userRepository.findOne(query);
  }
}
