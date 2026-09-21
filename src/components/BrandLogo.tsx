import lightLogo from "@/assets/n-digital-logo-light.png";
import darkLogo from "@/assets/n-digital-logo-dark.png";
import { useTheme } from "@/lib/theme";

export function BrandMark({
  size = 40,
  className = "",
  ring = true,
}: {
  size?: number;
  animated?: boolean;
  className?: string;
  ring?: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerSize = ring ? Math.round(size * 1.14) : size;

  const glow = ring
    ? "0 6px 24px color-mix(in oklab, var(--pink-primary) 14%, transparent)"
    : isDark
    ? "drop-shadow(0 2px 10px color-mix(in oklab, var(--pink-primary) 55%, transparent))"
    : "drop-shadow(0 2px 8px color-mix(in oklab, var(--coffee-bean, #2E1B1D) 35%, transparent))";

  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: containerSize, height: containerSize }}
    >
      {ring && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid color-mix(in oklab, var(--pink-primary) 45%, transparent)",
            boxShadow:
              "0 0 0 1px color-mix(in oklab, white 25%, transparent) inset, " + glow,
          }}
        />
      )}
      {/* Cross-fade both logos to swap smoothly on theme change */}
      <img
        src={lightLogo}
        alt="N-Digital"
        width={size}
        height={size}
        className="relative z-10 object-contain transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          opacity: isDark ? 0 : 1,
          filter: ring ? undefined : glow,
        }}
      />
      <img
        src={darkLogo}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="absolute z-10 object-contain transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          opacity: isDark ? 1 : 0,
          filter: ring ? undefined : glow,
        }}
      />
    </div>
  );
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      dir="ltr"
      lang="en"
      className={`font-display font-semibold tracking-tight ${className}`}
      style={{
        direction: "ltr",
        unicodeBidi: "isolate",
        textAlign: "left",
        whiteSpace: "nowrap",
      }}
    >
      <span className="text-gradient-pink">N</span>
      <span className="opacity-80">-Digital</span>
    </span>
  );
}
