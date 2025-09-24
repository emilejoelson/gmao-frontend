export interface ILoginRequest {
  email: string;
  motDePasse: string;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export interface IBaseDto {
  createdAt: string;
  updatedAt: string;
}

export interface IPermissionResponse {
  id: number;
  uuid: string;
  name: string;
  description: string;
  enabled: boolean;
  baseDto: IBaseDto;
}

export interface IRoleResponse {
  id: number;
  uuid: string;
  name: string;
  description: string;
  enabled: boolean;
  permissions: IPermissionResponse[];
  baseDto: IBaseDto;
}

export interface IUserResponse {
  id: number;
  uuid: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  fullName: string;
  roles: IRoleResponse[];
  permissions: IPermissionResponse[];
  baseDto: IBaseDto;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: IUserResponse;
}

export interface IResponseDto {
  status: string;
  message: string;
}