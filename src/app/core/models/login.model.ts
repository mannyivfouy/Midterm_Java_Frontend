export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  sId: number;
  username: string;
  role: string;
}
