
import Image from "next/image";
import { DoctorForm } from "@/components/forms/DoctorForm";

const DoctorRegister = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="doctor"
            className="mb-12 h-10 w-fit"
          />

          <DoctorForm />

          <p className="mt-20 text-dark-600 xl:text-left">
            © 2024 CarePluse
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/dr-green.png"
        height={1000}
        width={1000}
        alt="doctor"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default DoctorRegister;
