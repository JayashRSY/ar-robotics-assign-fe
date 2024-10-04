import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './apiEndpoints';
import { ISigninResponse, IRegisterResponse, IRefreshToken, ISignoutResponse } from '../interfaces/IApiTypes';
import { IRegisterFormProps } from '../interfaces/IAuthFormProps';

export const signin = async (email: string, password: string) => {
        const response = await axiosClient.post<ISigninResponse>(API_ENDPOINTS.SIGNIN, { email, password });
        return response.data;
};

export const register = async (form: IRegisterFormProps) => {
        const response = await axiosClient.post<IRegisterResponse>(API_ENDPOINTS.REGISTER, form);
        return response.data;
};
export const refresh = async () => {
        const response = await axiosClient.get<IRefreshToken>(API_ENDPOINTS.REFRESH);
        return response.data;
};

export const signout = async () => {
        const response = await axiosClient.post<ISignoutResponse>(API_ENDPOINTS.SIGNOUT);
        return response.data;
};