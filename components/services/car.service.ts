import axiosInstance from "./url.service";

export const carService = {
  addCar: (data: FormData) =>
    axiosInstance.post("/api/cars", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  getAllCars: () =>
    axiosInstance.get("/api/cars"),

  getCarById: (id: string) =>
    axiosInstance.get(`/api/cars/${id}`),

  updateCar: (id: string, data: FormData) =>
    axiosInstance.put(`/api/cars/${id}`, data),

  deleteCar: (id: string) =>
    axiosInstance.delete(`/api/cars/${id}`),
};


