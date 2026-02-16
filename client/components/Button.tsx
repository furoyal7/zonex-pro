"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 rounded-full",
    secondary:
      "bg-surface text-primary shadow-sm hover:shadow-md border border-border rounded-full",
    outline:
      "border-2 border-primary text-primary hover:bg-primary-50 rounded-full",
    ghost:
      "text-text-secondary hover:text-primary hover:bg-primary-50 rounded-xl",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2.5 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
};

export default Button;

