import type { JSX } from "react";

export default function Experience(): JSX.Element {
  return (
    <section
      id="experience"
      className="px-8 py-20 md:py-24
                 bg-gray-50 dark:bg-neutral-950"
    >
      <p className="text-center text-gray-500 dark:text-gray-400">
        Explore My
      </p>

      <h2 className="text-4xl font-bold text-center mb-12">
        Technical Skills
      </h2>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Frontend */}
        <SkillCard
          title="Frontend Development"
          skills={[
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
          ]}
        />

        {/* Backend */}
        <SkillCard
          title="Backend & Databases"
          skills={[
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "SQL",
            "Prisma ORM",
            "REST APIs",
            "WebSockets",
          ]}
        />

        {/* Systems & Tools */}
        <SkillCard
          title="Systems & Tools"
          skills={[
            "C / C++",
            "Data Structures & Algorithms",
            "Docker",
            "Turborepos",
            "Git & GitHub",
            "Linux",
            "DevOps Fundamentals",
          ]}
        />

        {/* ML */}
        <SkillCard
          title="Machine Learning"
          skills={[
            "Python",
            "Machine Learning Algorithms",
            "Data Analysis",
            "Model Training & Evaluation",
          ]}
        />
      </div>
    </section>
  );
}

type SkillCardProps = {
  title: string;
  skills: string[];
};

function SkillCard({ title, skills }: SkillCardProps): JSX.Element {
  return (
    <div
      className="border rounded-2xl p-6
                 bg-white dark:bg-neutral-900
                 border-gray-200 dark:border-neutral-700
                 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-4 text-center">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-black dark:bg-white rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
