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
export class InvalidCredentialsException extends Error {
  status: number;
  constructor() {
    super();
    this.name = 'InvalidCredentialsException';
    this.status = statusCode.UNAUTHORIZE;
    this.message = 'Credentials provided was not valid';
  }
}
