export const Logo: React.FC<{
  className?: string;
  textClassName?: string;
}> = ({ className = "w-10 h-10", textClassName = "text-xl" }) => {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`${className} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="blueGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" /> {/* Darker Blue */}
              <stop offset="50%" stopColor="#06b6d4" /> {/* Cyan */}
              <stop offset="100%" stopColor="#67e8f9" /> {/* Light Cyan */}
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" /> {/* Fuchsia */}
              <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
              <stop offset="100%" stopColor="#7c3aed" /> {/* Violet */}
            </linearGradient>
          </defs>
          
          {/* Bottom Layer (Blue Shape) - Bottom-Left to Top-Right */}
          <path
            d="M16 48 L44 12"
            stroke="url(#blueGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-100"
          />
          
          {/* Top Layer (Purple Shape) - Top-Left to Bottom-Right */}
          {/* Using a cutout mask simulation by drawing the purple line over */}
          <path
            d="M16 12 L44 48"
            stroke="url(#purpleGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-100 mix-blend-screen"
          />
          
          {/* Highlight overlays for 3D effect */}
          <path
             d="M18 46 L42 14"
             stroke="white"
             strokeWidth="2"
             strokeLinecap="round"
             className="opacity-40 blur-[1px]"
          />
           <path
             d="M18 14 L42 46"
             stroke="white"
             strokeWidth="2"
             strokeLinecap="round"
             className="opacity-40 blur-[1px]"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-wide ${textClassName}`}
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            color: "var(--color-text-primary)",
          }}
        >
          ZONEX
        </span>
        <div className="flex items-center justify-between w-full">
            <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-50 mr-1"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-500">PRO</span>
        </div>
      </div>
    </div>
  );
};

