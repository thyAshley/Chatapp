import * as statusCode from '../statusCode';

export class UserNotFoundException extends Error {
  status: number;
  constructor() {
    super();
    this.name = 'UserNotFoundException';
    this.status = statusCode.NOT_FOUND;
    this.message = 'User cannot be found';
  }
}

export class UnauthorizedException extends Error {
  status: number;
  constructor(message?: string) {
    super();
    this.name = 'UnauthorizedException';
    this.status = statusCode.UNAUTHORIZE;
    this.message = message || 'Invalid or expired token';
  }
}

export class EmailAlreadyExistException extends Error {
  status: number;
  constructor() {
    super();
    this.name = 'EmailAlreadyExistException';
    this.status = statusCode.BAD_REQUEST;
    this.message = 'Email is already in use';
  }
}
export class InvalidCredentialsException extends Error {
  status: number;
  constructor() {
    super();
    this.name = 'InvalidCredentialsException';
    this.status = statusCode.UNAUTHORIZE;
    this.message = 'Credentials provided was not valid';
  }
}

export class UncaughtException extends Error {
  status: number;
  constructor() {
    super();
    this.name = 'UncaughtException';
    this.status = statusCode.INTERNAL_ERROR;
    this.message =
      'You have encountered an unexpected error, please try again. Please inform the administrator if this occurs again';
  }
}
export class InputValidationError extends Error {
  status: number;
  constructor(message: any) {
    super();
    this.name = 'InputValidationError';
    this.status = statusCode.BAD_REQUEST;
    this.message = message;
  }
}
export class InvalidFileType extends Error {
  status: number;
  constructor(message: any) {
    super();
    this.name = 'InvalidFileType';
    this.status = statusCode.BAD_REQUEST;
    this.message = message;
  }
}
