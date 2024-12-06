import { AxiosResponse } from "axios";
import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"

interface Category {
    id : number,
    title : string,
    icon : string,
    [key: string]: any
}

export const getCategories = async () : Promise<Category[]> => {
    try {
        const {data}: AxiosResponse<Category[]> = await privateApi.get(Endpoints.category);
        return data; // Javobdagi ma'lumotlarni qaytaramiz
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
}