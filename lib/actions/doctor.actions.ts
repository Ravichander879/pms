
"use server";

import { ID } from "node-appwrite";
import { DOCTOR_COLLECTION_ID, DATABASE_ID, databases } from "../appwrite.config";

export const registerDoctor = async (doctor: any) => {
  try {
    const newDoctor = await databases.createDocument(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      ID.unique(),
      {
        ...doctor,
        approved: false,
      }
    );
    return newDoctor;
  } catch (error) {
    console.error("Error registering doctor:", error);
    throw error;
  }
};

export const getDoctors = async (onlyApproved = false) => {
  try {
    const doctors = await databases.listDocuments(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!
    );
    if (onlyApproved) {
      return doctors.documents.filter((doc) => doc.approved);
    }
    return doctors.documents;
  } catch (error) {
    console.error("Error getting doctors:", error);
    return [];
  }
};

export const updateDoctorStatus = async (doctorId: string, approved: boolean) => {
  try {
    const updatedDoctor = await databases.updateDocument(
      DATABASE_ID!,
      DOCTOR_COLLECTION_ID!,
      doctorId,
      { approved }
    );
    return updatedDoctor;
  } catch (error) {
    console.error("Error updating doctor status:", error);
    throw error;
  }
};
