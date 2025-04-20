import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack Fitness App
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Built a secure full-stack fitness app where users can log
                    workouts, track their weight, and create custom plans with
                    preloaded or personal exercises.
                  </li>
                  <li>
                    Designed a clean, responsive UI with Bootstrap — featuring
                    modals for quick edits and a dedicated workout planner for
                    better clarity.
                  </li>
                  <li>
                    Used Spring Security and JWTs to protect user data, and
                    added JUnit tests to ensure reliable backend logic with 70%+
                    test coverage.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Spring Boot", "React", "MySQL"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div>TODO: Insert video or picture here</div>
            </div>

            <div className="grid grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack Fitness App
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Built a secure full-stack fitness app where users can log
                    workouts, track their weight, and create custom plans with
                    preloaded or personal exercises.
                  </li>
                  <li>
                    Designed a clean, responsive UI with Bootstrap — featuring
                    modals for quick edits and a dedicated workout planner for
                    better clarity.
                  </li>
                  <li>
                    Used Spring Security and JWTs to protect user data, and
                    added JUnit tests to ensure reliable backend logic with 70%+
                    test coverage.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Spring Boot", "React", "MySQL"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div>TODO: Insert video or picture here</div>
            </div>

            <div className="grid grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack Fitness App
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Built a secure full-stack fitness app where users can log
                    workouts, track their weight, and create custom plans with
                    preloaded or personal exercises.
                  </li>
                  <li>
                    Designed a clean, responsive UI with Bootstrap — featuring
                    modals for quick edits and a dedicated workout planner for
                    better clarity.
                  </li>
                  <li>
                    Used Spring Security and JWTs to protect user data, and
                    added JUnit tests to ensure reliable backend logic with 70%+
                    test coverage.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Spring Boot", "React", "MySQL"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div>TODO: Insert video or picture here</div>
            </div>

            <div className="grid grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Full-Stack Fitness App
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Built a secure full-stack fitness app where users can log
                    workouts, track their weight, and create custom plans with
                    preloaded or personal exercises.
                  </li>
                  <li>
                    Designed a clean, responsive UI with Bootstrap — featuring
                    modals for quick edits and a dedicated workout planner for
                    better clarity.
                  </li>
                  <li>
                    Used Spring Security and JWTs to protect user data, and
                    added JUnit tests to ensure reliable backend logic with 70%+
                    test coverage.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Spring Boot", "React", "MySQL"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div>TODO: Insert video or picture here</div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
