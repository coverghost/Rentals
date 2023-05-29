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
const getAllUser =async () => {
  try {
      const response = await axios.get(api + "/get-all-user", {
      });
      const data = response.data;
      return data 
    } catch (error: any) {
      return error
    }
}

const transactionByUpi =async (token:any,value:any) => {
  try {
      const response = await axios.post(api + "/Transfer-By-Upi", {
        token,
        value
      });
      const data = response.data;
      return data 
    } catch (error: any) {
      return error
    }
}

const AddBeneficary =async (token:any,value:any) => {
  try {
      const response = await axios.post(api + "/add-beneficary", {
        token,
        value
      });
      const data = response.data;
      return data 
    } catch (error: any) {
      return error
    }
}
const listbeificery =async (token:any) => {
  try {
      const response = await axios.post(api + "/list-beificery-detail", {
        token,
      });
      const data = response.data;
      return data 
    } catch (error: any) {
      return error
    }
}

export const dashboarService = {
    getUserData,
    getAllUser,
    transactionByUpi,
    AddBeneficary,
    listbeificery
}