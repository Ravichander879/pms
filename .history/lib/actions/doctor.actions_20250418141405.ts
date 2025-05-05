"use server";

import { ID } from "node-appwrite";
import { DATABASE_ID, DOCTOR_COLLECTION_ID, databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const registerDoctor = async (doctor: any) => {
  try {
    const newDoctor = await databases.createDocument(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      ID.unique(),
      {
        ...doctor,
        $createdAt: doctor.createdAt
      }
    );

    return parseStringify(newDoctor);
  } catch (error) {
    console.error("Error in registerDoctor:", error);
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const doctors = await databases.listDocuments(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!
    );
    
    return parseStringify(doctors);
  } catch (error) {
    console.error("Error in getDoctors:", error);
    throw error;
  }
};