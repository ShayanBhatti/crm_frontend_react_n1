export interface User {
  id: string;
  email: string;
  role: "ADMIN" | "USER";
}

export interface AuthResponse {
  user: User;
  token: string;
}
