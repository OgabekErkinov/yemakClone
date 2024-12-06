import { AxiosResponse } from "axios";
import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"
import { CategoryProps } from "@/Components/Category/Interfaces/CategoryItem";



export const getCategories = async () : Promise<CategoryProps[]> => {
    try {
        const response: AxiosResponse<Category[]> = await privateApi.get(Endpoints.category);
        return response?.data; 
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
}