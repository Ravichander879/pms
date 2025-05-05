// filepath: c:\Users\nithi\OneDrive\Desktop\website\healthcare\lib\actions\doctor.actions.ts
"use server";

import { ID } from "node-appwrite";
import { DATABASE_ID, DOCTOR_COLLECTION_ID, databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const registerDoctor = async (doctor: any) => {
  try {
    const trimmedName =
      doctor.name.length > 20 ? doctor.name.slice(0, 20) : doctor.name;

    const newDoctor = await databases.createDocument(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      ID.unique(),
      {
        name: trimmedName,
        email: doctor.email,
        phone: doctor.phone,
        experience: doctor.experience,
        qualifications: doctor.qualifications,
        specialization: doctor.specialization,
        status: doctor.status,
        createdAt: new Date().toISOString()
      }
    );

    if (!newDoctor) throw new Error("Failed to create doctor");
    return parseStringify(newDoctor);
  } catch (error) {
    console.error("An error occurred while creating a new doctor:", error);
    throw error;
  }
};