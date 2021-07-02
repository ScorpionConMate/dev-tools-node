import { Request, Response, NextFunction } from 'express';
export class AuthMiddleware {
  static async isLogged(req: Request, response: Response, next: NextFunction): Promise<void> {
    return next();
  }
}
