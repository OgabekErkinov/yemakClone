import { AxiosResponse } from "axios";
import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"



export const getCategories = async () : Promise<CategoryP[]> => {
    try {
        const response: AxiosResponse<Category[]> = await privateApi.get(Endpoints.category);
        return response?.data; 
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
}