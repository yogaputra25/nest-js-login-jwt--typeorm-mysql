import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    async passwordhast(data: any): Promise<string>{
        return await bcrypt.hash(data, 10)
    }
    async passwordecryp(data: any, password: any){
        return await bcrypt.compare(data, password)
    }
}
