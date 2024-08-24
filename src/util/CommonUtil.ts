import { ResponseDto } from '../dto/response.dto';
import { Response } from 'express';

export const getResponse = (res: Response, body: ResponseDto): Response => {
  return res.status(body.responseCode).json(body);
};
