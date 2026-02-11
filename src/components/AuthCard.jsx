import { motion } from "framer-motion"
import { useState } from "react"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import ValuePanel from "./ValuePanel"

export default function AuthCard() {
  const [mode, setMode] = useState("signup")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 40px rgba(59,130,246,0.35)"
      }}
      transition={{ duration: 0.6 }}
      className="flex w-[960px] max-h-[85vh] rounded-3xl overflow-hidden
      bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl"
    >
      <ValuePanel />

     <div className="w-1/2 p-8 overflow-y-auto flex flex-col">
  {/* FORM */}
  {mode === "login" ? <LoginForm /> : <SignupForm />}

  <button
    onClick={() => setMode(mode === "login" ? "signup" : "login")}
    className="mt-4 text-sm text-blue-600 hover:underline"
  >
    {mode === "login"
      ? "Create new account"
      : "Already have an account?"}
  </button>

  {/* BRAND LOGO AT BOTTOM */}
  <div className="mt-auto pt-10 flex justify-center opacity-60">
    <img
      src="/assets/logos/intellidart-logo.png"
      alt="IntelliDART"
      className="h-12 md:h-14 object-contain"
    />
  </div>
</div>

    </motion.div>
  )
}
