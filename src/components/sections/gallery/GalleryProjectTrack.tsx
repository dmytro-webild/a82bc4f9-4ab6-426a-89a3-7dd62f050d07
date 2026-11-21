import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import HorizontalScrollSection from "@/components/animation/HorizontalScrollSection";
import MaskedLineReveal from "@/components/animation/MaskedLineReveal";
import HydraArrowPill from "@/components/kit/HydraArrowPill";
import { useImageReady, useKitMotion } from "@/components/kit/kitMotion";
import { MotionMedia } from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Project = { title: string; imageSrc: string; imageAlt?: string; href?: string };

type GalleryProjectTrackProps = {
  title?: string;
  items?: Project[];
  hoverLabel?: string;
  button?: { text: string; href: string };
  ariaLabel?: string;
  className?: string;
};

const TRAVEL = 0.1;
const SHIFT = (TRAVEL / (1 + 2 * TRAVEL)) * 100;
const STRIPS = [0, 1, 2, 3];
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const DEFAULT_ITEMS: Project[] = [
  { title: "Maasvlakte Solar Park", imageSrc: px(2800832), imageAlt: "Rows of solar panels in a green field from above" },
  { title: "Noordzee Wind Cluster", imageSrc: px(1108814), imageAlt: "Wind turbines along a grey coastline" },
  { title: "Botlek Battery Hall", imageSrc: px(325229), imageAlt: "Long hall of storage cabinets" },
  { title: "Moerdijk Rooftop Array", imageSrc: px(8853502), imageAlt: "Engineer fitting solar panels on a roof" },
];

const Linked = ({ item, className, children }: { item: Project; className: string; children: ReactNode }) =>
  item.href ? (
    <a href={item.href} className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );

const ProjectCard = ({ item, hoverLabel, drift, reduce }: { item: Project; hoverLabel: string; drift?: MotionValue<string>; reduce: boolean }) => {
  const kit = useKitMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const ready = useImageReady(ref, inView);
  return (
    <Linked item={item} className="group block w-[82vw] lg:w-[min(44vw,calc((100svh-15rem)*1.6))]">
      <motion.div
        ref={ref}
        initial={reduce ? false : "hidden"}
        animate={reduce || (inView && ready) ? "shown" : "hidden"}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-image)]"
      >
        <motion.div
          variants={{ hidden: { scale: 1.08 }, shown: { scale: 1, transition: { duration: kit.slow, ease: kit.ease } } }}
          className="absolute inset-0"
        >
          <MotionMedia
            src={item.imageSrc}
            alt={item.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            style={drift ? { x: drift, left: `${-TRAVEL * 100}%`, width: `${(1 + 2 * TRAVEL) * 100}%` } : undefined}
            className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover will-change-transform"
          />
        </motion.div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[1rem] p-[1rem]">
          <h3 className="min-w-0 text-balance text-[length:var(--text-body)] leading-[1.35] text-white [font-family:var(--font-body)] [letter-spacing:-0.02em] [overflow-wrap:anywhere]">{item.title}</h3>
          <div className="bg-accent text-accent-foreground opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-focus-visible:opacity-100">
            <p className="whitespace-nowrap px-[0.5rem] py-[0.25rem] text-[length:var(--text-label)] uppercase leading-[1.2] [font-family:var(--font-label)]">
              {hoverLabel}
            </p>
          </div>
        </div>
        {!reduce && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-4">
            {STRIPS.map((strip) => (
              <motion.div
                key={strip}
                variants={{ hidden: { scaleY: 1 }, shown: { scaleY: 0, transition: { duration: kit.base, ease: kit.easeInOut, delay: strip * 0.07 } } }}
                className="h-full origin-top bg-background"
              />
            ))}
          </div>
        )}
      </motion.div>
    </Linked>
  );
};

const GalleryProjectTrack = ({
  title = "Recent projects",
  items = DEFAULT_ITEMS,
  hoverLabel = "View project",
  button = { text: "View all", href: "#projects" },
  ariaLabel,
  className,
}: GalleryProjectTrackProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = Boolean(useReducedMotion());
  const kit = useKitMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, (p) => `${-SHIFT + clamp01(p) * 2 * SHIFT}%`);

  const header = (
    <div className="ml-[calc(50%-min(100vw-2*var(--gutter),var(--max-w))/2)] flex w-[min(100vw-2*var(--gutter),var(--max-w))] flex-col items-start gap-[1.25rem] lg:flex-row lg:items-end lg:justify-between">
      <MaskedLineReveal
        text={title}
        tag="h2"
        stagger={0.04}
        duration={kit.base}
        className="max-w-[14em] text-balance text-[length:var(--text-h2)] leading-[1.1] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
      />
      {button && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: kit.base, ease: kit.ease, delay: 0.15 }}
          className="shrink-0"
        >
          <HydraArrowPill text={button.text} href={button.href} tone="deep" />
        </motion.div>
      )}
    </div>
  );

  return (
    <section data-scene aria-label={ariaLabel ?? title} className={cn("relative bg-background pb-[var(--section-space)] text-foreground", className)}>
      <div ref={trackRef}>
        <HorizontalScrollSection
          progress={false}
          compact
          header={header}
          trackClassName="items-center gap-[0.5rem] px-[calc((100vw-min(100vw-2*var(--gutter),var(--max-w)))/2)]"
        >
          {items.map((item, index) => (
            <ProjectCard key={index} item={item} hoverLabel={hoverLabel} drift={reduce ? undefined : drift} reduce={reduce} />
          ))}
        </HorizontalScrollSection>
      </div>
    </section>
  );
};

export default GalleryProjectTrack;
