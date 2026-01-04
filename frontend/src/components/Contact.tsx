import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="px-8 py-20 md:py-24 text-center
                 bg-gray-50 dark:bg-neutral-950"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        rithkchaudhary86@gmail.com
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        rchaudhary_be22@thapar.edu
      </p>
    </section>
  );
}
