type Variant = "ghost" | "blue" | "violet";

interface Props {
  variant?: Variant;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  ghost:  "imigongo-overlay-ghost",
  blue:   "imigongo-overlay-blue",
  violet: "imigongo-overlay-violet",
};

export default function ImicongoOverlay({ variant = "ghost", className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`absolute inset-0 pointer-events-none imigongo-overlay ${variantClass[variant]} ${className}`}
    />
  );
}
