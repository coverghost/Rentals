import axios from "axios";
import api from "../../services/api";


const getUserData =async (token:any) => {
    try {
        const response = await axios.post(api + "/dashboard", {
          token,
        });
        const data = response.data;
        return data 
      } catch (error: any) {
        return error
      }
}

export const dashboarService = {
    getUserData
}