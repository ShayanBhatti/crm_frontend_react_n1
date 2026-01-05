import { useState } from "react";
import { loginApi } from "./api/auth.api";
import { authStorage } from "./services/auth.storage";
import type { AuthResponse } from "./types/auth.types";
import { Link } from "react-router-dom";
import { loaderService } from "../../lib/loader/loader.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await loginApi({ email, password });
      const data = res.data.data as AuthResponse;

      authStorage.set(data.token, data.user);

      console.log("LOGIN SUCCESS:", data);

      // later → navigate("/app/dashboard")
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-3xl font-heading text-primary mb-6 text-center">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-bg border border-muted"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-md bg-bg border border-muted"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-text-inverse py-2 rounded-md"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-text-muted text-sm text-center mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-primary font-medium">
          Sign Up
        </Link>
      </p>
 <button onClick={() => {
   loaderService.start();
   setTimeout(() => loaderService.stop(), 2000);
 }}>  Test me </button>
    </div>
   
  );
}

export default Login;
