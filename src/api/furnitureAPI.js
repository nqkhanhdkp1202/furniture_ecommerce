import axios from "axios";
import axiosClient from "./axiosClient";

export const furnitureAPI = {
  getProductsList: (params) => {
    const url = "/api/products/";
    return axiosClient.get(url, { params });
  },

  getUsersList: (params) => {
    const url = "/api/users/";
    return axiosClient.get(url, { params });
  },

  getSuppliersList: (params) => {
    const url = "/api/suppliers/";
    return axiosClient.get(url, { params });
  },

  getCategoryList: (params) => {
    const url = "api/category/";
    return axiosClient.get(url, { params });
  },

  getDetail: (id,params) => {
    const url = `/api/products/${id}`;
    return axiosClient.get(url, {params})
  },

  getRelated: (id,params) => {
    const url = `/api/products/4RelatedWith/${id}`;
    return axiosClient.get(url, {params})
  },

  getShipmentList: (params) => {
    const url = "/api/shipment/";
    return axiosClient.get(url, {params})
  },

  getPaymentList: (params) => {
    const url = "/api/payments/";
    return axiosClient.get(url, {params})
  },
  
};
