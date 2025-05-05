"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

const DoctorFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  specialization: z
    .string()
    .min(2, "Specialization must be at least 2 characters"),
  qualifications: z
    .string()
    .min(2, "Qualifications must be at least 2 characters"),
  experience: z
    .string()
    .min(1, "Years of experience is required"),
});

export const DoctorForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof DoctorFormValidation>>({
    resolver: zodResolver(DoctorFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialization: "",
      qualifications: "",
      experience: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DoctorFormValidation>) => {
    setIsLoading(true);
    try {
      const doctor = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        specialization: values.specialization,
        qualifications: values.qualifications,
        experience: values.experience,
        status: "pending",
        createdAt: new Date().toISOString()
      };

      const newDoctor = await registerDoctor(doctor);

      if (newDoctor) {
        router.push("/doctors/register/success");
      } else {
        throw new Error("Failed to register doctor");
      }
    } catch (error) {
      console.error("Error registering doctor:", error);
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h1 className="header">Join Our Medical Team 👨‍⚕️</h1>
          <p className="text-dark-700">Register as a healthcare provider.</p>
        </div>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Dr. John Doe"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email Address"
          placeholder="doctor@example.com"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(555) 123-4567"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="specialization"
          label="Specialization"
          placeholder="Cardiology"
        />

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="qualifications"
          label="Qualifications"
          placeholder="MD, PhD, Board Certifications"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="experience"
          label="Years of Experience"
          placeholder="10"
        />

        <SubmitButton isLoading={isLoading}>Register as Doctor</SubmitButton>
      </form>
    </Form>
  );
};
