"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithEmailAndPassword } from "@/app/lib/authHelpers";
import Link from "next/link";

export default function LoginForm({ weekPath, routerPath }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    const { user, error } = await loginWithEmailAndPassword(email, password);

    if (error) {
      setError(error);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        router.push(`/${weekPath}/shopping-list`);
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

      <div>
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="login-email"
          id="login-email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="login-password"
          id="login-password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="••••••••"
          required
        />
      </div>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link
          href={`/week-${weekPath}/register`}
          className="text-blue-500 hover:underline"
        >
          Sign up
        </Link>
      </p>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
          Successfully signed in!
        </div>
      )}

      <button
        disabled={loading}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
