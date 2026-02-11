export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full h-20 px-10
        flex items-center justify-between
        bg-white/10 backdrop-blur-lg
        border-b border-white/10
        z-50
      "
    >
      {/* LEFT LOGOS */}
      <div className="flex items-center gap-6">
        {/* Hashwift */}
        <img
          src="/assets/logos/hashwift-logo.png"
          alt="Hashwift"
          className="h-12 md:h-14 w-auto object-contain"
        />

        {/* IntelliDART – LENGTH INCREASED */}
        <img
          src="/assets/logos/intellidart-logo.png"
          alt="IntelliDART"
          className="h-12 md:h-14 w-auto object-contain"
        />
      </div>

      {/* TAGLINE */}
      <p className="hidden md:block text-sm font-medium text-white/90">
        Intellidart – Redefining Learning with AI-powered Pedagogy
      </p>
    </header>
  )
}
