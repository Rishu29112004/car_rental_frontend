"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  addCarSchema,
  AddCarFormValues,
} from "@/components/screens/AddCars/component/validation/add-car.schema";
import { carService } from "@/components/services/car.service";

const EditCarDetailsForm = ({ carId }: { carId: string }) => {
  const form = useForm<AddCarFormValues>({
    resolver: zodResolver(addCarSchema),
    defaultValues: {
      image: undefined,

      brand: "",
      model: "",

      manufacturingYear: undefined,
      dailyPrice: undefined,

      category: undefined,
      transmission: undefined,
      fuelType: undefined,

      seats: undefined,
      location: undefined,

      description: "",
    },
  });

  // 🔥 PREFILL FORM WITH EXISTING CAR DATA
  useEffect(() => {
    if (!carId) return;

    const fetchCar = async () => {
      try {
        const res = await carService.getCarById(carId);
        const car = res.data; // Access the car data from response

        form.reset({
          image: undefined, // file cannot be prefilled

          brand: car.brand,
          model: car.model,

          manufacturingYear: car.manufacturingYear,
          dailyPrice: car.dailyPrice,

          category: car.category,
          transmission: car.transmission,
          fuelType: car.fuelType,

          seats: car.seats,
          location: car.location,

          description: car.description,
        });
      } catch (err) {
        console.error("Failed to fetch car", err);
      }
    };

    fetchCar();
  }, [carId]);

  // ✅ SUBMIT HANDLER
  const onSubmit = (data: AddCarFormValues) => {
    console.log("EDIT CAR DATA:", data);
  };

  return (
    <div className="h-[100dvh] overflow-y-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 border p-4 rounded-xl bg-slate-100 w-full"
        >
          {/* Image */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      field.onChange(e.target.files?.[0])
                    }
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          {/* Brand & Model */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                   <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                   <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          {/* Year & Price */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="manufacturingYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manufacturing Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(+e.target.value)
                      }
                    />
                  </FormControl>
                   <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dailyPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(+e.target.value)
                      }
                    />
                  </FormControl>
                   <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
                 <FormMessage/>
              </FormItem>
            )}
          />

          {/* Transmission */}
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
                 <FormMessage/>
              </FormItem>
            )}
          />

          {/* Fuel Type */}
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
                 <FormMessage/>
              </FormItem>
            )}
          />

          {/* Seats & Location */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="seats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seats</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(+e.target.value)
                      }
                    />
                  </FormControl>
                   <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="bangalore">
                        Bangalore
                      </SelectItem>
                    </SelectContent>
                  </Select>
                   <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={3} {...field} />
                </FormControl>
                 <FormMessage/>
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="sticky bottom-0 bg-slate-100 pt-3 pb-4">
            <Button className="w-full">
              Edit Your Car
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditCarDetailsForm;
