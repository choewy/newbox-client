export enum AuthApiErrorCode {
  LoginFailed = 'AUTH_LOGIN_FAILED',
  AlreadyExists = 'AUTH_ALREADY_EXISTS',
  NotAvailable = 'AUTH_NOT_AVAILABLE',
  TokenExpired = 'AUTH_TOKEN_EXPIRED',
  InvalidToken = 'AUTH_INVALID_TOKEN',
  WrongPassword = 'AUTH_WRONG_PASSWORD',
  PasswordMismatch = 'AUTH_PASSWORD_MISMATCH',
}
