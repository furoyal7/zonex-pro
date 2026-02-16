import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl mb-14 md:mb-16 ${className}`}
    >
      {badge && <span className="badge mb-4 inline-block">{badge}</span>}
      <h2 className="heading-section mt-2">{title}</h2>
      {subtitle && <p className="body-lg mt-4 md:mt-5">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
