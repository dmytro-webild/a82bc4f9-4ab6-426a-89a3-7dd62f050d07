import React from "react";

type AcsLogoProps = {
  variant?: "full" | "mark" | "footer";
  className?: string;
  iconClassName?: string;
};

export const AcsLogoIcon: React.FC<{ className?: string }> = ({ className = "h-7 w-auto" }) => (
  <svg
    viewBox="0 0 48 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="url(#acs-logo-grad)"
      d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
    />
    <ellipse
      cx="41.412"
      cy="6.333"
      fill="#47bfff"
      rx="5.971"
      ry="9.665"
      transform="rotate(37.892 41.412 6.333)"
    />
    <ellipse
      cx="38.418"
      cy="32.4"
      fill="#47bfff"
      rx="5.971"
      ry="15.297"
      transform="rotate(37.892 38.418 32.4)"
    />
    <defs>
      <linearGradient id="acs-logo-grad" x1="0" y1="0" x2="48" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#863bff" />
        <stop offset="1" stopColor="#7e14ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const AcsLogo: React.FC<AcsLogoProps> = ({
  variant = "full",
  className = "",
  iconClassName = "h-7 w-auto",
}) => {
  if (variant === "mark") {
    return <AcsLogoIcon className={iconClassName} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <AcsLogoIcon className={iconClassName} />
      <div className="flex flex-col leading-none">
        <span className="font-[family-name:var(--font-heading)] text-[length:var(--text-body-lg)] font-bold tracking-[-0.04em] text-foreground">
          ACS HOMES <span className="text-[color:var(--primary)]">INC</span>
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-0.5">
          Mansfield, MA
        </span>
      </div>
    </div>
  );
};

export default AcsLogo;
