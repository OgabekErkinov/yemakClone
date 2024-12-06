import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"

interface Category {
    id : number,
    title : 
}

export const getCategories = async () => {
    const response = await privateApi.get(Endpoints.category)
}