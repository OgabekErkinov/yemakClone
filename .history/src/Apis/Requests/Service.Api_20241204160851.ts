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
        const response: AxiosRespon<Category[]> = await privateApi.get(Endpoints.category);
        return response.data; // Javobdagi ma'lumotlarni qaytaramiz
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // Xatoni qayta uzatamiz
    }
}