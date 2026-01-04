import type { JSX } from "react";

type NavbarProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export default function Navbar({
  dark,
  setDark,
}: NavbarProps): JSX.Element {
  return (
    <nav className="w-full px-6 md:px-24 py-6 flex items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-medium">
        Rithk Chaudhary
      </h1>

      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-10 text-2xl">
          {["about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:underline underline-offset-8 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="border rounded-full px-3 py-1 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
