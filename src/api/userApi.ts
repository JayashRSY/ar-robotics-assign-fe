import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './apiEndpoints';

export const getAllUser = async () => {
    const response = await axiosClient.get(API_ENDPOINTS.GET_ALL_USER);
    return response.data;
};

export const deleteUser = async (id: string) => {
    const response = await axiosClient.post(API_ENDPOINTS.DELETE_USER, { id: id });
    return response.data;
};
