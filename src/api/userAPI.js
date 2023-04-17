import axiosClient from "./axiosClient";

const userAPI = {
    getInfoUser: async (token) => {
        const url = "/api/users/getUserInforByToken";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axiosClient.post(url, {}, config);
        return response.data;
      },
   
}

export default userAPI