import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children:  React.ReactNode;
  href?:     string;
  onClick?:  () => void;
  variant?:  Variant;
  size?:     Size;
  icon?:     boolean;
  className?: string;
  type?:     "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-blue-500 to-violet-600 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5",
  secondary:
    "bg-surface-1 text-ink border border-edge-2 hover:bg-surface-2 hover:border-edge-2 hover:-translate-y-0.5",
  ghost:
    "text-dim hover:text-ink hover:bg-surface-1",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2",
};

export default function Button({
  children,
  href,
  onClick,
  variant  = "primary",
  size     = "md",
  icon     = false,
  className = "",
  type     = "button",
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) return <Link href={href} className={base}>{content}</Link>;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}
