import type { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="about" className="px-8 py-20 md:py-24">
      <p className="text-center text-gray-500 dark:text-gray-400">
        Get to Know More
      </p>

      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
        
        {/* Experience Card */}
        <div className="border rounded-2xl p-6 w-full md:w-80 text-center 
                        bg-white dark:bg-neutral-900 dark:border-neutral-700
                        transition hover:shadow-lg hover:-translate-y-1">
          <img
            src="/experience.png"
            className="w-10 mx-auto mb-4 transition dark:invert"
          />

          <h3 className="text-xl font-semibold">
            Experience
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Amdocs <br />
            Software Developer
          </p>
          {/* Year Badge */}
          <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full 
                           bg-gray-100 text-gray-700
                           dark:bg-neutral-800 dark:text-gray-300">
            January 2026 – Present
          </span>
        </div>
 
        {/* Education Card */}
        <div className="border rounded-2xl p-6 w-full md:w-80 text-center
                        bg-white dark:bg-neutral-900 dark:border-neutral-700
                        transition hover:shadow-lg hover:-translate-y-1">
          <img
            src="/education.png"
            className="w-10 mx-auto mb-4 transition dark:invert"
          />

          <h3 className="text-xl font-semibold">
            Education
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            B.E. Engineering <br />
            Electronics & Computer Science
          </p>

          {/* Year Badge */}
          <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full 
                           bg-gray-100 text-gray-700
                           dark:bg-neutral-800 dark:text-gray-300">
            2022 – Present
          </span>
        </div>
      </div>

      {/* About Description */}
      <p className="max-w-4xl mx-auto text-center leading-relaxed
                    text-gray-600 dark:text-gray-300">
        I am a final-year Electronics and Computer Science Engineering student at Thapar University
        (2022 – Present) with strong hands-on experience in Full-stack Web
        Development and Backend System Design. I actively build Scalable,
        Real-time Applications and enjoy working across the entire stack — from
        Frontend interfaces to Backend services and Databases.
        <br /><br />
        My technical skill set includes React.js, Next.js, Node.js, TypeScript,
        MongoDB, PostgreSQL, Prisma, SQL, and Docker, along with experience in
        System design, Data Structures & Algorithms, and DevOps fundamentals.
        I have also worked on machine learning projects using Python and applied
        ML concepts to real-world problem statements. I focus on writing clean,
        maintainable code and building production-ready applications.
      </p>
    </section>
  );
}
