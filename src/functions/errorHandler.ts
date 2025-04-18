import { Request, Response, NextFunction } from "express";

export class HttpExceptions extends Error {
  public statusCode: number;
  public errors: any;

  constructor(message: string, statusCode: number, errors: any = null) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;

    Object.setPrototypeOf(this, HttpExceptions.prototype);
  }
}

export const errorCatcher = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: Error) => {
      next(error);
    });
  };
};

export const errorHandler = (
  error: HttpExceptions,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;

  // Return JSON error response
  res.status(statusCode).json({
    status: false,
    message: error.message || "Internal Server Error",
    errors: error.errors || null,
  });
};
