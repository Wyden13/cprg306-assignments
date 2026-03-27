"use client";
// Import the useUserAuth hook
import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, loading, router]);

  //   Show loading state while checking authentication
  if (loading) {
    return (
      <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8">
        <div className="text-white text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </main>
    );
  }

  // If user is authenticated, don't render (redirect happening)
  if (user) {
    return null;
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Shopping List App
        </h1>
        <p className="text-gray-600 mb-8">
          Organize your groceries with our simple and effective shopping list
          manager.
        </p>
        <div className="space-y-4">
          <Link
            href="/week-10/login"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Sign In
          </Link>

          <Link
            href="/week-10/register"
            className="block w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Create Account
          </Link>

          <button
            onClick={gitHubSignIn}
            className="block w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Sign In with GitHub
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Week 10 — Authentication & Protected Routes
        </p>
      </div>
    </main>
  );
}
