import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './apiEndpoints';
import { ISigninResponse, IRegisterResponse, IRefreshToken } from '../interfaces/IApiTypes';

export const signin = async (email: string, password: string) => {
        const response = await axiosClient.post<ISigninResponse>(API_ENDPOINTS.SIGNIN, { email, password });
        return response.data;
};

export const register = async (email: string, password: string) => {
        const response = await axiosClient.post<IRegisterResponse>(API_ENDPOINTS.REGISTER, { email, password });
        return response.data;
};
export const refresh = async () => {
        const response = await axiosClient.get<IRefreshToken>(API_ENDPOINTS.REFRESH);
        return response.data;
};