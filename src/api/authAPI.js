import axiosClient from "./axiosClient";

const authAPI = {
    login: (data, params) => {
        const url = "/api/token";
        return axiosClient.post(url,data,{params});
    },

    register: (data,params) => {
        const url = "/api/users";
        return axiosClient.post(url,data,{params});
    }
    
}

export default authAPI