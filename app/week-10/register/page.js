"use client";

import SignUpForm from "@/app/components/auth/SignUpForm";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <SignUpForm weekPath="week-10" />
    </div>
  );
}
