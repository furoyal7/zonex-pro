export const Logo: React.FC<{
  className?: string;
  textClassName?: string;
  showIcon?: boolean;
}> = ({ className = "w-8 h-8", textClassName = "text-xl", showIcon = true }) => {
  return (
    <div className="flex items-center gap-2.5 group">
      {showIcon && (
        <div className={`${className} relative flex items-center justify-center`}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Minimalist Geometric Logo - Safenetics Shield/Node */}
            <rect width="40" height="40" rx="8" fill="var(--color-surface-elevated)" />
            <path 
              d="M20 10V30M10 20H30" 
              stroke="var(--accent-bronze)" 
              strokeWidth="2.5" 
              strokeLinecap="square"
              className="opacity-80"
            />
            <path 
              d="M15 15L25 25M25 15L15 25" 
              stroke="var(--accent-bronze)" 
              strokeWidth="1.5" 
              strokeLinecap="square"
              className="opacity-40"
            />
            <rect 
              x="18" y="18" width="4" height="4" 
              fill="var(--accent-bronze)" 
              className="animate-pulse"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight ${textClassName} text-text-primary`}
          style={{
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            letterSpacing: "-0.02em"
          }}
        >
          SAFENETICS
        </span>
      </div>
    </div>
  );
};

