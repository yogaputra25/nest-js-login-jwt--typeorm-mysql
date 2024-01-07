import { Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entity/user';


@Injectable()
export class ProductService {

    constructor( @InjectRepository(Product) private readonly productRepository: Repository<Product> ){}

    async createProduct(data: { name: string; public: any; userID: any }, images: Express.Multer.File): Promise<Product> {
        const produk2 = new Product
        produk2.nameProduct= data.name,
        produk2.isPublic= data.public,
        produk2.user= data.userID,
        produk2.file= images.originalname
        
        // const product = this.productRepository.create({
        //   nameProduct: data.nameProduct,
        //   isPublic: data.public,
        //   user: data.userID,
        //   file: images.map((image) => image.filename), // Store image filenames
        // });
        await this.productRepository.save(produk2);
        return produk2;
      }

      async getAllPublic(){
        const dataUsers = await this.productRepository.find({
            relations: {user: true},
            where: {isPublic: 1}
        })

        // const filterProducts = dataUsers.map((user) => {
        //     return {
        //         id: user.id
        //     }
        // })
        return dataUsers
      }
      async getAllPrivate(){
        const dataUsers = await this.productRepository.find({
            relations: {user: true},
            where: {isPublic: 0}
        })

        // const filterProducts = dataUsers.map((user) => {
        //     return {
        //         id: user.id
        //     }
        // })
        return dataUsers
      }
}

