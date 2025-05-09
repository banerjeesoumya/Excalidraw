"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { SignUpSchema, SignInSchema } from "@repo/common/types";

export type AuthFormProps = {
  type: "signin" | "signup";
};

type SignUpErrors = {
  name?: string;
  email?: string;
  password?: string;
};

type SignInErrors = {
  email?: string;
  password?: string;
};

export function AuthForm({ type }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignUpSchema | SignInSchema>(
    type === "signup" 
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" }
  );
  const [errors, setErrors] = useState<SignUpErrors | SignInErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    if (type === "signup") {
      const newErrors: SignUpErrors = {};
      
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }

      if ("name" in formData) {
        if (!formData.name) {
          newErrors.name = "Name is required";
        } else if (formData.name.length < 2) {
          newErrors.name = "Name must be at least 2 characters long";
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    } else {
      const newErrors: SignInErrors = {};
      
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      // Password validation
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {

      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (type === "signin") {
        toast.success("Successfully signed in!");
      } else {
        toast.success("Account created successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <form onSubmit={onSubmit} className="space-y-4">
        {type === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={"name" in formData ? formData.name : ""}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {type === "signup" && "name" in errors && errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          {"email" in errors && errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {type === "signin" && (
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={type === "signup" ? "Create a password" : "Enter your password"}
            value={formData.password}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          {"password" in errors && errors.password && (
            <p className="text-sm text-destructive">{errors.password}</p>
          )}
        </div>
        
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {type === "signin" ? "Sign In" : "Create Account"}
        </Button>
      </form>
      
      <div className="text-center text-sm">
        {type === "signin" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}