import axios from "axios"
import { getBeansInter } from "../../../shared/interface/interface";
const baseUrl: string = import.meta.env.VITE_APP_BASE_URL;


export const getBeans = async({params}:{params:getBeansInter}) => {
    try {
        const response = await axios.get(`${baseUrl}/beans`, {params:{...params}})
    return response.data
    } catch (error) {
        console.log(error)
    }
    
}
