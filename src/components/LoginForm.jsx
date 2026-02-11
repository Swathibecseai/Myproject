import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError("")

    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      alert("Login successful 🎉")
    } catch (err) {
      // Friendly error messages
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email")
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password")
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Welcome back</h2>

      <input
        className="input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        onClick={handleLogin}
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Logging in..." : "Login with Email"}
      </button>

      <div className="text-center text-xs text-slate-500">or</div>

      <button className="btn-secondary flex items-center justify-center gap-2">
        <img
          src="/assets/logos/google-logo.png"
          alt="Google"
          className="h-4"
        />
        Continue with Google
      </button>
    </div>
  )
}
