import { AddCarFormValues, EditCarFormValues } from "../screens/AddCars/component/validation/add-car.schema";
import axiosInstance from "./url.service";

export const carService = {
  addCar: async (data: AddCarFormValues) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value === undefined || value === null) return;

        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await axiosInstance.post("/api/cars/add-car", formData);

      return response.data;
    } catch (error: any) {
      console.error(
        "Add car service error:",
        error.response?.data || error.message,
      );
      throw error;
    }
  },

  getAllCars: async () => {
    try {
      const response = await axiosInstance.get("/api/cars");
      return response.data;
    } catch (error) {
      console.error("Get all cars error:", error);
      throw error; 
    }
  },

  getMyCars: async () => {
    try {
      const response = await axiosInstance.get("/api/cars/my-cars");
      return response.data;
    } catch (error) {
      console.error("Get my cars error:", error);
      throw error;
    }
  },

  getCarById: async (id: string) => {
    try {
      const response = await axiosInstance.get(
        `/api/cars/${id}`, // ✅ NO colon
      );
      return response.data;
    } catch (error: any) {
      console.error(
        "Get car by id error:",
        error.response?.data || error.message,
      );
      throw error;
    }
  },


  updateCar: async (id: string, data: EditCarFormValues) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value === undefined || value === null) return;

        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });
      const response = await axiosInstance.patch(`/api/cars/update-car/${id}`, formData);
      return response.data;
    } catch (error: any) {
      console.error(
        "Update car service error:",
        error.response?.data || error.message,
      );
      throw error;
    }
  },

  deleteCar: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/api/cars/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(
        "Delete car service error:",
        error.response?.data || error.message
      );
      throw error;
    }
  }
};
