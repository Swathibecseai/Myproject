import { motion } from "framer-motion"

const items = [
  { label: "Career planning", icon: "/assets/icons/career.png" },
  { label: "Mentor access", icon: "/assets/icons/mentor.png" },
  { label: "College guidance", icon: "/assets/icons/college.png" },
  { label: "Analytics & insights", icon: "/assets/icons/analytics.png" },
  { label: "Personalized roadmap", icon: "/assets/icons/roadmap.png" }
]

export default function ValuePanel() {
  return (
    <div className="w-1/2 p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <h2 className="text-2xl font-semibold mb-2">
        Welcome Back. Let’s Continue Your Journey.
      </h2>

      <p className="text-sm text-blue-100 mb-6">
        AI-powered STEM roadmap built to guide your academic success.
      </p>

      <div className="space-y-4">
        {items.map(item => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3"
          >
            <img src={item.icon} className="h-8 w-8" />
            <span className="text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
