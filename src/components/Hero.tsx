import MyPic from "../assets/PortfolioMe.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="
        container mx-auto px-4 sm:px-6
        min-h-[calc(100vh-60px)]
        flex flex-col-reverse lg:flex-row
        items-center justify-center
        gap-8 sm:gap-10 lg:gap-16 xl:gap-24
        text-content
        py-8 sm:py-12 lg:py-0
      "
    >
      {/* Text */}
      <div className="max-w-xl text-center lg:text-left w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-header font-bold">Frontend</span>
          <span className="text-white block mt-2">Developer</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
          Moin, ich bin <span className="text-white font-semibold">Niklas</span>.
          <br />
          Student und seit über einem Jahr{" "}
          <span className="text-purple-300">Frontend-Entwickler</span>.
        </p>

        <div className="mt-6 sm:mt-8">
          <a href="#projects">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold glow-hover transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base">
              Projekte ansehen
            </button>
          </a>
        </div>
      </div>

      {/* Bild */}
      <div
        className="
          relative flex-shrink-0
          w-[min(80vw,18rem)] sm:w-[20rem] md:w-[22rem] lg:w-[26rem] xl:w-[28rem]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl" />
        <img
          src={MyPic}
          alt="Niklas - Frontend Developer"
          className="
            relative w-full aspect-[4/5] object-cover object-top
            rounded-2xl shadow-2xl glow-hover border border-purple-500/20
          "
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;