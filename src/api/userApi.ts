import axiosClient from './axiosClient';
import { API_ENDPOINTS } from './apiEndpoints';

export const getAllUser = async () => {
    const response = await axiosClient.get(API_ENDPOINTS.GET_ALL_USER);
    return response.data;
};

export const deleteUser = async () => {
    const response = await axiosClient.delete(API_ENDPOINTS.DELETE_USER);
    return response.data;
};
