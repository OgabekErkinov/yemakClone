import { privateApi } from "../Axios/PrivateApi"
import { Endpoints } from "./Endpoints"

interface 

export const getCategories = async () => {
    const response = await privateApi.get(Endpoints.category)
}