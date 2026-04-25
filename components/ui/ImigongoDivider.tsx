type Variant = "ghost" | "blue" | "violet";

interface Props {
  variant?: Variant;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  ghost:  "imigongo-divider-ghost",
  blue:   "imigongo-divider-blue",
  violet: "imigongo-divider-violet",
};

export default function ImigongoDivider({ variant = "ghost", className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`imigongo-divider h-10 md:h-12 w-full ${variantClass[variant]} ${className}`}
    />
  );
}
