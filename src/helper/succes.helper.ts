interface SuccessResponse {
  statusCode: number;
  message: string;
  data?: any;
}
export class SuccessResponseFactory {
  static ok(message: string, data?: any): SuccessResponse {
    return {
      statusCode: 200,
      message,
      data,
    };
  }
}
