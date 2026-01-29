import { AddCarFormValues } from "../screens/AddCars/component/validation/add-car.schema";
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

  //   getAllCars: () => axiosInstance.get("/api/cars"),
  getAllCars: async () => {
    try {
      const response = await axiosInstance.get("/api/cars");
      return response.data;
    } catch (error) {
      console.error("Get all cars error:", error);
      throw error; // 👈 important
    }
  },

  //   export const getApplicationsByJobId = async (jobId) => {
  //   try {
  //     const response = await axiosInstance.get(`/api/v1/get-applications-by-jobId/${jobId}`);
  //     return response?.data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getCarById: (id: string) =>
  //   axiosInstance.get(`/api/cars/${id}`),

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

//   updateCar: (id: string, data: FormData) => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) => {
//         if (value === undefined || value === null) return;

//         if (value instanceof File) {
//           formData.append(key, value);
//         } else {
//           formData.append(key, String(value));
//         }
//       });

//       const response = await axiosInstance.put(

//       )
//     } catch (error) {}
//   },

  // deleteCar: (id: string) =>
  //   axiosInstance.delete(`/api/cars/${id}`),
};
