import { api } from "../apiClient";

export const register = (payload) => api.post('/account/register', payload);

export const login = (payload) => api.post('/account/login', payload);

export const logout = () => null;

export const forgotPassword = (email) => api.post('/account/forgot-password', { email });

export const changePassword = () => null;

export const resetPassword = (payload) => api.post('/account/reset-password', payload);
