"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { signupFormValue, signupSchema } from "./signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import LoginForm from "../Login/components/LoginForm";

const SignupForm = () => {
  const router = useRouter();

  const form = useForm<signupFormValue>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: signupFormValue) => {
    console.log(values);
  };

  const {openModal}=useModal()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <p className="font-semibold text-blue-500 text-xl gap-2 flex items-center justify-center">
          User<span className="text-black">Sign UP</span>
        </p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="type here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="type here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="type here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-blue-500 text-white">
          Sign Up
        </Button>

        <p className="text-sm text-center">
          Already have account?{" "}
          <span
            onClick={() =>openModal(<LoginForm/>)}
            className="text-blue-500 cursor-pointer"
          >
            Click here
          </span>
        </p>
      </form>
    </Form>
  );
};

export default SignupForm;
