export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Manoj Gupta",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Nandita Palshetkar",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Devi Prasad Shetty",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Prathap C. Reddy",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jyothi Shenoy",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Ashok Seth",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];
export type Doctor = {
  $id?: string;
  image?: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  qualifications: string;
  experience: string;
  status: "pending" | "approved" | "rejected";
  createdAt?: string;
};
export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
  approved: "/assets/icons/check.svg",
  rejected: "/assets/icons/cancelled.svg",
};
interface IAppointment {
  schedule: Date;
  primaryPhysician: string;
  reason?: string;
  note?: string;
  cancellationReason?: string;
  isOnline: boolean;
}