
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Coffee,
} from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Loading and error state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Normal email/password login
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(
        `${apiUrl}/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
            rememberMe,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Invalid email or password."
        );
      }

      // The backend must establish the user's session.
      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  // Google login success
  async function handleGoogleSuccess(credentialResponse) {
    setError("");
    setIsLoading(true);

    try {
      const credential = credentialResponse.credential;
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!credential) {
        throw new Error("Google did not return a credential.");
      }

      if (!apiUrl) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(
        `${apiUrl}/api/v1/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ credential }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Google sign-in failed."
        );
      }

      // The backend must verify Google and establish a session.
      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in with Google."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoogleError() {
    setError("Google sign-in could not be completed.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200 px-4 py-8 sm:px-6">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-orange-900/10 lg:min-h-[620px] lg:grid-cols-2">

        {/* Left: AddaTech branding */}
        <aside className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-amber-900 p-8 text-white sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Coffee className="h-7 w-7" aria-hidden="true" />
            </div>

            <span className="text-lg font-bold tracking-wide">
              AddaTech
            </span>
          </div>

          <div className="relative z-10 my-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Welcome back
            </p>

            <h1 className="max-w-md text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Your café, running smarter.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-orange-50 sm:text-base">
              Sign in to manage your café operations, orders,
              and team from one simple place.
            </p>
          </div>

          <p className="relative z-10 text-sm text-orange-100">
            Made for better café days.
          </p>
        </aside>

        {/* Right: Login form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Sign in
              </h2>

              <p className="mt-2 text-slate-500">
                Enter your account details to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((visible) => !visible)
                    }
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-orange-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password and remember me */}
              <div className="flex items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                    className="h-4 w-4 accent-orange-600"
                  />
                  Remember me
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm font-semibold text-orange-600 transition hover:text-orange-700"
                >
                  Forgot password?
                </a>
              </div>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Registration link */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-700">
              <p>Don't have an account?</p>

              <a
                href="/signup"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Register here
              </a>
            </div>

            {/* Google login */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 border-t border-slate-100 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Or continue with
              </span>

              <div className="flex w-full justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  theme="outline"
                  size="large"
                  shape="rectangular"
                  text="continue_with"
                  width="320"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
