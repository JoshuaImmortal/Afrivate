import bgVideo from './assets/img/vecteezy_abstract-digital-purple-particle-waves-and-lights-animated_24663709.mp4'
import logoImg from './assets/img/Vector.png'

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden hero-bg flex flex-col">
      {/* Background video (no overlays) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* overlays removed to reveal full video */}
      
      {/* Navigation */}
      <nav className="navbar-bg sticky top-0 z-20 px-4 sm:px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center">
          <img src={logoImg} alt="Afrivate" className="h-8 sm:h-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          <span className="ml-3 text-2xl sm:text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white">AFRIVATE</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <a href="#" className="nav-link text-base sm:text-lg font-medium transition-all duration-200 hover:tracking-wide">Jobs</a>
          <a href="#" className="nav-link text-base sm:text-lg font-medium transition-all duration-200 hover:tracking-wide">Volunteering</a>
          <a href="#" className="nav-link text-base sm:text-lg font-medium transition-all duration-200 hover:tracking-wide">Courses</a>
          <a href="#" className="nav-link text-base sm:text-lg font-medium transition-all duration-200 hover:tracking-wide">Employers</a>
          <a href="#" className="nav-link text-base sm:text-lg font-medium transition-all duration-200 hover:tracking-wide">About Us</a>
          <button className="btn btn-md btn-glass">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white filter drop-shadow-[0_8px_16px_rgba(255,255,255,0.15)]">
            Where Jobs Meet Purpose
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-100/90 max-w-3xl mx-auto px-4 leading-relaxed tracking-wide">
            Afrivate is a smart web platform that connects youths with businesses, NGOs, and organizations for jobs, volunteering and professional growth.
          </p>
          <button className="btn btn-lg btn-primary">
            Find your next Opportunity
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
