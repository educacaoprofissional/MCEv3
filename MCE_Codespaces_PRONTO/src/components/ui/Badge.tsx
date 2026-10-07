import React from "react";

interface BadgeProps {
  variant: "success" | "danger" | "warning" | "neutral" | "info" | "online" | "offline";
  children: React.ReactNode;
}

const variantStyles: Record<BadgeProps["variant"], React.CSSProperties> = {
  success: { background: "#dcfce7", color: "#15803d" },
  danger: { background: "#fee2e2", color: "#b91c1c" },
  warning: { background: "#fef3c7", color: "#b45309" },
  neutral: { background: "#f3f4f6", color: "#4b5563" },
  info: { background: "#dbeafe", color: "#1d4ed8" },
  online: { background: "#dcfce7", color: "#15803d" },
  offline: { background: "#fee2e2", color: "#b91c1c" },
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      style={{
        ...variantStyles[variant],
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "12px",
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
