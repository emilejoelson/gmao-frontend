export interface ITokenValue {
  sub: string;
  exp: number;
  iat: number;
  uuid: string;
  roles: string[];
  permissions: string[];
}