import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">Fitness Tracking App</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Secure full-stack fitness app where users can log workouts,
                    track their weight, and create custom plans with preloaded
                    or personal exercises.
                  </li>
                  <li>
                    Clean, responsive UI with Bootstrap that features modals for
                    quick edits and a dedicated workout planner for better
                    clarity.
                  </li>
                  <li>
                    Spring Security and JWTs were used to protect user data, and
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
                <div className="flex justify-start items-center space-x-2 my-4">
                  <a
                    href="https://github.com/hpatel-27/tempest-fitness"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    rel="noopener noreferrer"
                  >
                    View Repository →
                  </a>
                  <img
                    className="h-6 w-6 object-contain transition-transform hover:scale-110"
                    src="./assets/github-mark-white.svg"
                    alt="Github icon"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center ml-2">
                <a
                  href="https://youtu.be/yGlsd5vD5jc"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  <img
                    className="object-contain"
                    src="./assets/tempest_login.png"
                    alt="Video Demo of Tempest-Fitness"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">Coffee Ordering App</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Multi-role coffee ordering platform for staff to create
                    recipes and manage customer orders, triggering inventory
                    updates in real-time.
                  </li>
                  <li>
                    Enforce role-based access and secure user authentication
                    using Spring Security.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Spring Boot", "AngularJS", "MySQL"].map(
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
              </div>

              <div className="flex justify-between items-center ml-2">
                <a
                  href="https://youtu.be/eCk8hywUNKY"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  <img
                    className="object-contain"
                    src="./assets/coffeemaker_login.png"
                    alt="Video Demo of CoffeeMaker"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  NBA Statistics Analysis
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Explored relationships between player info (height, weight,
                    age, college, and birth state) and advanced metrics like
                    BPM, VORP, and WS using NBA stats data.
                  </li>
                  <li>
                    Used linear regression to evaluate which player stats (TS%,
                    USG%, PER) were strongest predictors of advanced performance
                    metrics.
                  </li>
                  <li>
                    Applied logistic regression for physical attributes and KNN
                    classification for categorical features like birth state and
                    college to model their influence on performance.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "scikit-learn"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start items-center space-x-2 my-4">
                  <a
                    href="https://github.com/hpatel-27/DataScience_CourseProject"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    rel="noopener noreferrer"
                  >
                    View Repository →
                  </a>
                  <img
                    className="h-6 w-6 object-contain transition-transform hover:scale-110"
                    src="./assets/github-mark-white.svg"
                    alt="Github icon"
                  />
                </div>
              </div>

              {/* <div className="flex justify-between items-center ml-2">
                <a
                  href="https://youtu.be/eCk8hywUNKY"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  <img
                    className="object-contain"
                    src="/src/assets/coffeemaker_login.png"
                    alt="Video Demo of CoffeeMaker"
                  />
                </a>
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Senior Design Project: Network Health Classification
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-1 mb-4">
                  <li>
                    Simulated real-world traffic and failure scenarios in NS-3
                    to evaluate network behavior under varying conditions.
                  </li>
                  <li>
                    Built a C++ agent to collect network performance metrics and
                    transmit the data to a Flask server for analysis.
                  </li>
                  <li>
                    Achieved 90%+ accuracy with a Random Forest classifier
                    trained to detect failing network conditions from our
                    collected data.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["C++", "NS-3", "Python", "Flask", "scikit-learn"].map(
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
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
