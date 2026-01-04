import type { JSX } from "react";

type Project = {
  title: string;
  image: string;
  description: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Real-Time Drawing Website",
    image: "/projects/drawing.png",
    description:
      "Collaborative real-time drawing platform built using WebSockets for live synchronization.",
    github: "https://github.com/RxNaruto/Draw-app",
  },
  {
    title: "Wallet Application",
    image: "/projects/wallet.png",
    description:
      "Secure digital wallet with user and merchant flows, transactions, and authentication.",
    github: "https://github.com/RxNaruto/WalletApp",
  },
  {
    title: "Real-Time Video Calling",
    image: "/projects/video-call.png",
    description:
      "Peer-to-peer real-time video calling application using WebRTC.",
    github: "https://github.com/RxNaruto/Webrtc24Nov",
  },
  {
    title: "Real-Time Chat Application",
    image: "/projects/chat.png",
    description:
      "Low-latency real-time chat application built with WebSockets.",
    github: "https://github.com/RxNaruto/RealTimeChat",
  },
  {
    title: "House Price Prediction",
    image: "/projects/house-price.png",
    description:
      "Machine learning model to predict house prices using regression techniques.",
    github: "https://github.com/RxNaruto/BangloreHousePricePredictor",
  },
  {
    title: "Food Delivery Website",
    image: "/projects/food-delivery.png",
    description:
      "Full-stack food delivery platform with restaurant listings, orders, and backend APIs.",
    github: "https://github.com/RxNaruto/MealMate",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section
      id="projects"
      className="px-8 py-20 md:py-24
                 bg-white dark:bg-black"
    >
      <p className="text-center text-gray-500 dark:text-gray-400">
        Browse My Recent
      </p>

      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-2xl overflow-hidden
                       bg-white dark:bg-neutral-900
                       border-gray-200 dark:border-neutral-700
                       hover:shadow-lg transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full
                           border border-black text-black
                           dark:border-white dark:text-white
                           transition
                           hover:bg-black hover:text-white
                           dark:hover:bg-white dark:hover:text-black"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
