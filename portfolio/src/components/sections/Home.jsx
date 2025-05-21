import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="items-center text-5xl md:text-7xl font-bold mb-6 mt-20 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Harsh Patel
          </h1>

          <img
            src="../../assets/Harsh.JPG"
            alt="Image of Harsh Patel"
            className="max-w-3xs rounded-full mx-auto mb-6"
          />
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a recent graduate from North Carolina State University where I
            received a degree in Computer Science with a concentration in AI! I
            graduated in May 2025 and am seeking opportunities as a Software
            Engineer or AI/ML Engineer. I enjoy building full-stack projects to
            demonstrate my skills, with a particular focus on backend systems
            and AI/ML applications. My goal is to develop solutions that offer
            both exceptional performance and unique experiences.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white py-3 px-6 rounded font-medium transition relative
                overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-indigo-600/50 text-indigo-600 py-3 px-6 rounded font-medium
                transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)
                hover:bg-indigo-600/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
