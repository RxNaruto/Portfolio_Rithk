import { useRef, useState, type JSX } from "react";

type NavbarProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export default function Navbar({
  dark,
  setDark,
}: NavbarProps): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3; // 🔉 keep it subtle
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <nav className="w-full px-6 md:px-24 py-6 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-medium">
        Rithk Chaudhary
      </h1>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-xl">
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

        {/* 🎵 Music Button (ICON BASED) */}
        <button
          onClick={toggleMusic}
          className="w-10 h-10 flex items-center justify-center
                     border rounded-full
                     hover:bg-black hover:text-white
                     dark:hover:bg-white dark:hover:text-black
                     transition"
          title={playing ? "Pause music" : "Play music"}
        >
          <img
            src={playing ? "/icons/pause.png" : "/icons/play.png"}
            alt={playing ? "Pause" : "Play"}
            className="w-4 h-4 dark:invert"
          />
        </button>

        {/* 🌙 Dark Mode Button */}
        <button
          onClick={() => setDark(!dark)}
          className="border rounded-full px-3 py-1 text-sm
                     hover:bg-black hover:text-white
                     dark:hover:bg-white dark:hover:text-black
                     transition"
        >
          {dark ? "Light" : "Dark"}
        </button>

        {/* Hidden Audio */}
        <audio
          ref={audioRef}
          src="/music.mp3"
          loop
          preload="none"
        />
      </div>
    </nav>
  );
}
