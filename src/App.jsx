import Header from "./components/Header"
import AuthCard from "./components/AuthCard"

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGE (lowest layer) */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/backgrounds/page-bg.png')",
        }}
      />

      {/* GRADIENT OVERLAY (lighter now) */}
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-900/40 via-purple-900/30 to-indigo-900/40" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <main className="flex items-center justify-center pt-24 pb-10">
          <AuthCard />
        </main>
      </div>
    </div>
  )
}
