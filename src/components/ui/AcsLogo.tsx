import React from "react";

type AcsLogoProps = {
  variant?: "full" | "mark" | "footer";
  className?: string;
  iconClassName?: string;
};

const ATTACHED_LOGO_URL =
  "https://storage.googleapis.com/webild/users/user_3MQlVB3qfyl983V9ddFQF7LiGU6/uploaded-1795300158825-5mtbhdyk.jpg";

export const AcsLogoIcon: React.FC<{ className?: string }> = ({ className = "h-7 w-auto" }) => (
  <img
    src={ATTACHED_LOGO_URL}
    alt="ACS HOMES INC Logo"
    className={`object-contain rounded-sm ${className}`}
  />
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
