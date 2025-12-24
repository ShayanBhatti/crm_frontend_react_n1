import api from "../../../lib/api/axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}
export interface AdminSignupPayload {
  tenantName: string;
  email: string;
  password: string;
}

export const adminSignupApi = (data: AdminSignupPayload) => {
  return api.post("/auth/signup", data);
};

export const loginApi = (data: LoginPayload) => {
  return api.post("/auth/login", data);
};

export const signupApi = (data: SignupPayload) => {
  return api.post("/auth/signup", data);
};
