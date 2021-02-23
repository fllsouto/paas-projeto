import { HttpException, HttpStatus } from "@nestjs/common";
import * as JWT from "jsonwebtoken";

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const {
        authorization
    } = req.headers;
    if (!authorization) {
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            message: "Token not!"
        }, HttpStatus.BAD_REQUEST);
    }

    const boundedToken: string = authorization.replace("Bearer ", "");
    const decodedToken = JWT.decode(boundedToken);

    if (!decodedToken.sub) {
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            message: "Invalid token!"
        }, HttpStatus.BAD_REQUEST);
    }

    req.headers.userId = decodedToken.sub;
    next();
  }
}