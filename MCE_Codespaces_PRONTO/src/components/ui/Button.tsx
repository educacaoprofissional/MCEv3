import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { background: "#2563eb", color: "#fff", border: "1px solid #2563eb" },
  secondary: { background: "#fff", color: "#374151", border: "1px solid #d1d5db" },
  danger: { background: "#dc2626", color: "#fff", border: "1px solid #dc2626" },
  ghost: { background: "transparent", color: "#374151", border: "1px solid transparent" },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "13px" },
  md: { padding: "8px 16px", fontSize: "14px" },
  lg: { padding: "10px 20px", fontSize: "15px" },
};

export default function Button({ variant = "primary", size = "md", loading = false, children, style, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        borderRadius: "8px",
        fontWeight: 500,
        cursor: (disabled || loading) ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        opacity: (disabled || loading) ? 0.7 : 1,
        fontFamily: "inherit",
        transition: "opacity 0.15s",
        ...style,
      }}
    >
      {loading && (
        <svg className="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 11-6.219-8.56" />
        </svg>
      )}
      {children}
    </button>
  );
}
