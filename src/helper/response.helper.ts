import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ResponseHelper {
  ok(data: any): any {
    return {
      status: HttpStatus.OK,
      message: 'Successfully',
      data: data,
    };
  }

  createNonReturn(): any {
    return {
      status: HttpStatus.OK,
      message: 'Data created',
    };
  }
  createReturn(data: any): any {
    return {
      status: HttpStatus.OK,
      message: 'Data created',
      data: data,
    };
  }

  badRequest(): any {
    return {
      status: HttpStatus.BAD_REQUEST,
      message: 'Invalid',
    };
  }
}
