import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MapPin, Mail, Phone, Facebook } from "lucide-react";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import { useKitMotion } from "@/components/kit/kitMotion";
import { AcsLogoIcon } from "@/components/ui/AcsLogo";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FooterLink = { text: string; href?: string };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterLimeWordmarkProps = {
  description?: string;
  primaryButton?: { text: string; href?: string };
  columns?: FooterColumn[];
  wordmark?: string;
  city?: string;
  timeZone?: string;
  copyright?: string;
  ariaLabel?: string;
  className?: string;
};

const defaultColumns: FooterColumn[] = [
  { title: "Pages", links: [{ text: "Home" }, { text: "Projects" }, { text: "About" }, { text: "Contact" }] },
  { title: "Social", links: [{ text: "Instagram" }, { text: "LinkedIn" }] },
];

const formatTime = (timeZone: string) => {
  try {
    return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
  }
};

const getLinkIcon = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes("mansfield") || lower.includes("ma") || lower.includes("location")) {
    return <MapPin className="size-7 sm:size-9 text-accent shrink-0 stroke-[2.25]" />;
  }
  if (lower.includes("@")) {
    return <Mail className="size-7 sm:size-9 text-accent shrink-0 stroke-[2.25]" />;
  }
  if (lower.includes("+") || /\d/.test(lower)) {
    return <Phone className="size-7 sm:size-9 text-accent shrink-0 stroke-[2.25]" />;
  }
  if (lower.includes("facebook")) {
    return <Facebook className="size-7 sm:size-9 text-accent shrink-0 stroke-[2.25]" />;
  }
  return null;
};

const FooterLimeWordmark = ({
  description = "Start your project today. Tell us about your site and let's work together to reach your goals.",
  primaryButton,
  columns = defaultColumns,
  wordmark = "©Studio",
  city,
  timeZone = "Europe/Amsterdam",
  copyright = "©2026 All rights reserved",
  ariaLabel,
  className,
}: FooterLimeWordmarkProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatTime(timeZone));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -5% 0px" },
    transition: { duration: kit.base, ease: kit.ease, delay },
  });

  return (
    <section aria-label={ariaLabel ?? "Footer"} data-tone="deep" className={cn("relative flex flex-col overflow-hidden bg-background pb-6 pt-[var(--section-space)] text-foreground", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 grid w-[var(--container)] -translate-x-1/2 grid-cols-4">
        {[0, 1, 2, 3].map((column) => (
          <div key={column} className="border-l border-[color-mix(in_srgb,var(--deep-foreground)_8%,transparent)] last:border-r" />
        ))}
      </div>
      <footer className="relative mx-auto flex w-[var(--container)] flex-col gap-[clamp(3rem,6vw,5.5rem)]">
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-4xl mx-auto w-full">
          {description && (
            <motion.p {...rise(0)} className="text-balance text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.25] tracking-[-0.03em] text-foreground text-center font-[family-name:var(--font-heading)]">
              {description}
            </motion.p>
          )}
          {primaryButton && (
            <motion.div {...rise(0.1)}>
              <HydraArrowPill text={primaryButton.text} href={primaryButton.href} tone="lime" />
            </motion.div>
          )}
          {columns && columns.length > 0 && (
            <div className="w-full flex flex-col gap-6 max-w-[42rem] text-left">
              {columns.map((column, index) => (
                <motion.div key={column.title} {...rise(0.1 + index * 0.08)} className="flex flex-col gap-6 rounded-2xl border border-white/20 bg-black/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-accent justify-center sm:justify-start">
                    <span className="size-2.5 rounded-full bg-accent inline-block" />
                    <p>{column.title}</p>
                  </div>
                  <ul className="flex flex-col gap-5 items-center sm:items-start">
                    {column.links.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.href ?? "#"}
                          target={link.href?.startsWith("http") ? "_blank" : undefined}
                          rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group flex flex-wrap items-center justify-center sm:justify-start gap-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white transition-colors hover:text-accent font-[family-name:var(--font-heading)] drop-shadow-md"
                        >
                          {getLinkIcon(link.text)}
                          <span className="transition-all duration-200 group-hover:translate-x-1">{link.text}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4 pt-4 border-t border-white/10 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <AcsLogoIcon className="h-[clamp(3rem,7vw,5.5rem)] w-auto shrink-0" />
            <MaskedLineReveal
              tag="p"
              lines={[wordmark]}
              duration={kit.slow}
              className="w-auto whitespace-nowrap text-[length:clamp(2.75rem,8vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] [font-family:var(--font-heading)] text-center"
            />
          </div>
          <motion.div {...rise(0.2)} className="flex flex-col items-center justify-center gap-3 pb-[clamp(0.25rem,1.2vw,1rem)] font-mono text-[length:var(--text-label)] uppercase leading-[1.2] text-center">
            {city && (
              <p className="whitespace-nowrap tabular-nums">
                {city}: {time}
              </p>
            )}
            <p className="whitespace-nowrap text-muted-foreground font-medium text-center">{copyright}</p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default FooterLimeWordmark;
