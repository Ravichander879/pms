
"use client";

import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex h-screen max-h-screen flex-col items-center justify-center text-center">
      <Image
        src="/assets/gifs/success.gif"
        alt="success"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1 className="header mb-4">Registration Successful!</h1>
      <p className="text-dark-600 mb-8">
        Your registration is pending approval from the admin. We will notify you
        once approved.
      </p>
      <Link href="/" className="button">
        Return to Home
      </Link>
    </div>
  );
}
