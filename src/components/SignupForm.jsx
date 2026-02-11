import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"

export default function SignupForm() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    mobile: "",
    email: "",
    zip: "",
    grade: "",
    interest: "",
    password: "",
    confirm: ""
  })

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSignup = async () => {
    setError("")

    // 🔐 Basic validation
    if (!form.email || !form.password || !form.confirm) {
      setError("Please fill all required fields")
      return
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match")
      return
    }

    try {
      setLoading(true)
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )
      alert("Account created successfully 🎉")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Create Your College Plan</h2>
      <p className="text-sm text-slate-600">
        Built for STEM students & parents
      </p>

      <select name="role" className="input" onChange={handleChange}>
        <option value="">I am</option>
        <option value="student">Student</option>
        <option value="parent">Parent / Guardian</option>
      </select>

      <input name="name" className="input" placeholder="Full Name" onChange={handleChange} />
      <input name="mobile" className="input" placeholder="Mobile Number" onChange={handleChange} />
      <input name="email" className="input" placeholder="Email Address" onChange={handleChange} />
      <input name="zip" className="input" placeholder="Zip Code" onChange={handleChange} />

      <select name="grade" className="input" onChange={handleChange}>
        <option value="">Grade / Year</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>

      <select name="interest" className="input" onChange={handleChange}>
        <option value="">STEM Interest</option>
        <option>Computer Science</option>
        <option>Engineering</option>
        <option>Biology</option>
        <option>Mathematics</option>
      </select>

      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
        onChange={handleChange}
      />

      <input
        name="confirm"
        type="password"
        className="input"
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        onClick={handleSignup}
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Creating..." : "Create My College Plan"}
      </button>
    </div>
  )
}
