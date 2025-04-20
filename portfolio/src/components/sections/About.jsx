export const About = () => {
  const frontendSkills = ["React", "JavaScript", "Bootstrap", "TailwindCSS"];
  const backendSkills = ["Java", "Python", "C", "Node.js", "AWS", "MySQL"];
  const aiSkills = ["scikit-learn", "PyTorch", "ROS2", "OpenCV"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hey there, I’m Harsh Patel. I love solving problems with code and
            learning how I can use tech to make life better. If I’m not working
            on a project or exploring deep learning architectures, I’m probably
            watching basketball (Go Raptors!), playing Rocket League, or lifting
            at the gym. I’m always looking for fun ways to turn ideas into
            something real and impactful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                      hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-5">
              <li>
                <strong>B.S. Computer Science (AI Concentration)</strong> -
                North Carolina State University (2021-2025)
              </li>
              <li>
                <strong>SWE Coursework: </strong>Data Structures and Algorithms,
                Software Engineering, App Web Computing, Operating Systems
              </li>
              <li>
                <strong>AI Coursework: </strong>Trustworthy and Efficient Deep
                Learning, Automated Learning and Data Analysis, Intro to Data
                Science
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
            <div className="space-y-5 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Software Engineering Intern @ iQuadra (May 2024 - August 2024)
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-1">
                  <li>
                    Gained experience with AWS using CloudFormation templates
                    and Lambda functions, which automated infrastructure
                    provisioning and enabled integration with DynamoDB.
                  </li>
                  <li>
                    Collaborated with other engineers, using those sessions to
                    deepen my understanding of cloud architecture and
                    troubleshoot blockers.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">
                  Undergraduate Researcher @ NCSU (December 2024 - August 2024)
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-1">
                  <li>
                    Engineering a 1/16 scale autonomous vehicle system using ROS
                    2, OpenCV, LiDAR, and a Zed2i camera to perform real-time
                    lane detection and navigation.
                  </li>
                  <li>
                    Utilized Dijkstra’s algorithm for autonomous intersection
                    traversal and implemented manual control using an Xbox
                    controller to validate perception features such as obstacle
                    detection.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
