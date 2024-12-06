import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"

interface Category {
    id : number,
    title : string,
    icon : string,
    [key: string]: any
}

export const getCategories = async () : Promi => {
    const response = await privateApi.get(Endpoints.category)
}