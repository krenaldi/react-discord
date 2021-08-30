import { api } from "../apiClient";

export const register = (payload) => api.post('/account/register', payload);

export const login = (payload) => api.post('/account/login', payload);

export const logout = () => null;

export const forgotPassword = () => null;

export const changePassword = () => null;

export const resetPassword = () => null;
