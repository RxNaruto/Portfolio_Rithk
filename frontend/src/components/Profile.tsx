import type { JSX } from "react";

export default function Profile(): JSX.Element {
  return (
    <section
  id="profile"
  className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12"
>

      {/* Profile Image */}
      <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
  <img
    src="/profile-pic.png"
    alt="Rithk Chaudhary"
    className="w-full h-full object-cover"
  />
</div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl">Hello, I'm</p>
<h1 className="text-4xl md:text-5xl font-bold my-2">Rithk Chaudhary</h1>
<p className="text-xl md:text-3xl text-gray-700 dark:text-gray-300">
  Final Year Student
</p>


        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/resume.pdf"
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
            download
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-full"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/rithk-chaudhary-133993217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn Profile"
              className="w-8 cursor-pointer hover:scale-110 transition dark:invert"
            />
          </a>

          <a
            href="https://github.com/RxNaruto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              alt="GitHub Profile"
              className="w-8 cursor-pointer hover:scale-110 transition dark:invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
