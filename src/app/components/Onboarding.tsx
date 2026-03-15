import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MousePointer2,
  Palette,
  MousePointerClick,
  PaintBucket,
  Check,
  Shuffle,
} from "lucide-react";

// 0 = select shape, 1 = pick color, 2 = try randomize, 3 = deselect, 4 = change bg, 5 = done
export type OnboardingStep = 0 | 1 | 2 | 3 | 4 | 5;

interface OnboardingProps {
  step: OnboardingStep;
  onSkip: () => void;
}

/* ------------------------------------------------------------------ */
/*  Animated cursor that loops a click gesture                        */
/* ------------------------------------------------------------------ */
function AnimatedHand({ direction }: { direction: "left" | "right" }) {
  const xFrom = direction === "left" ? -20 : 20;
  return (
    <motion.div
      className="inline-block ml-2"
      initial={{ x: xFrom, opacity: 0 }}
      animate={{
        x: [xFrom, 0, 0, 0, xFrom],
        opacity: [0, 1, 1, 1, 0],
        scale: [1, 1, 0.8, 1, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 0.6,
        times: [0, 0.3, 0.5, 0.6, 1],
        ease: "easeInOut",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 3L19 12L12 13L9 20L5 3Z"
          fill="white"
          stroke="#111"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pulsing ripple dot                                                */
/* ------------------------------------------------------------------ */
function ClickRipple({ color = "rgba(92,158,255,0.5)" }: { color?: string }) {
  return (
    <motion.span
      className="inline-block rounded-full"
      style={{
        width: 8,
        height: 8,
        background: color,
        marginLeft: 4,
        verticalAlign: "middle",
      }}
      animate={{
        scale: [1, 2.5, 1],
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 0.6,
        times: [0.45, 0.6, 1],
        ease: "easeOut",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Step configuration                                                */
/* ------------------------------------------------------------------ */
const STEP_CONFIG = [
  {
    icon: MousePointer2,
    title: "Click any shape to select it",
    hint: "The blue ring shows which shape is active",
    accent: "#5c9eff",
    handDir: "left" as const,
  },
  {
    icon: Palette,
    title: "Now pick a color from the palette",
    hint: "It will apply to the selected shape",
    accent: "#45ea7f",
    handDir: "right" as const,
  },
  {
    icon: Shuffle,
    title: "Click the ∞ button to randomize the color",
    hint: "It picks a random color from the palette for the selected shape",
    accent: "#6cb2d2",
    handDir: "right" as const,
  },
  {
    icon: MousePointerClick,
    title: "Click the empty background",
    hint: "This deselects all shapes",
    accent: "#f0a030",
    handDir: "left" as const,
  },
  {
    icon: PaintBucket,
    title: "Pick a color to change the comp background",
    hint: "With nothing selected, colors apply to the background",
    accent: "#c084fc",
    handDir: "right" as const,
  },
];

const TOTAL_STEPS = STEP_CONFIG.length;

/* ------------------------------------------------------------------ */
/*  Floating step card                                                */
/* ------------------------------------------------------------------ */
function StepCard({
  step,
  onSkip,
}: {
  step: number;
  onSkip: () => void;
}) {
  const c = STEP_CONFIG[step];
  if (!c) return null;
  const Icon = c.icon;

  return (
    <motion.div
      key={`step-${step}`}
      className="pointer-events-auto"
      initial={{ y: 40, opacity: 0, scale: 0.92 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -30, opacity: 0, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
    >
      <div
        className="flex items-center gap-4 pl-4 pr-3 py-3 rounded-2xl"
        style={{
          background: "rgba(26, 26, 28, 0.97)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${c.accent}35`,
          boxShadow: `0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03), 0 0 40px ${c.accent}10`,
          minWidth: 440,
        }}
      >
        {/* Pulsing icon badge */}
        <motion.div
          className="shrink-0 flex items-center justify-center rounded-xl"
          style={{
            width: 44,
            height: 44,
            background: `${c.accent}15`,
            border: `1.5px solid ${c.accent}40`,
          }}
          animate={{
            boxShadow: [
              `0 0 0 0px ${c.accent}30`,
              `0 0 0 8px ${c.accent}00`,
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        >
          <Icon size={20} style={{ color: c.accent }} strokeWidth={1.8} />
        </motion.div>

        {/* Text + animated hints */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span
              className="text-[#f0f0f0] text-[13px]"
              style={{ fontWeight: 600 }}
            >
              {c.title}
            </span>
            <AnimatedHand direction={c.handDir} />
            <ClickRipple color={`${c.accent}80`} />
          </div>
          <span className="text-[#777] text-[11px] mt-0.5 block">
            {c.hint}
          </span>
        </div>

        {/* Progress dots + skip */}
        <div className="flex flex-col items-center gap-2 ml-2">
          <div className="flex gap-1.5">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{
                  height: 6,
                  borderRadius: 3,
                }}
                animate={{
                  background: i === step ? c.accent : i < step ? `${c.accent}60` : "#444",
                  width: i === step ? 16 : 6,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <button
            onClick={onSkip}
            className="text-[10px] text-[#666] hover:text-[#aaa] transition-colors px-2 py-0.5"
          >
            Skip
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Success celebration                                               */
/* ------------------------------------------------------------------ */
function SuccessBanner({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="pointer-events-none"
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -30, opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 350, damping: 26 }}
    >
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-2xl"
        style={{
          background: "rgba(26, 26, 28, 0.97)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(69, 234, 127, 0.35)",
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.55), 0 0 30px rgba(69,234,127,0.1)",
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 44,
            height: 44,
            background: "rgba(69, 234, 127, 0.12)",
            border: "1.5px solid rgba(69, 234, 127, 0.4)",
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
            delay: 0.15,
          }}
        >
          <Check size={20} className="text-[#45ea7f]" strokeWidth={2.5} />
        </motion.div>
        <div>
          <motion.span
            className="text-[#f0f0f0] text-[13px] block"
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            You're all set!
          </motion.span>
          <motion.span
            className="text-[#777] text-[11px] block mt-0.5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            Explore shapes and colors freely
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Glow wrapper — highlights UI sections during onboarding           */
/* ------------------------------------------------------------------ */
export function OnboardingGlow({
  active,
  color = "#5c9eff",
  children,
  className = "",
  rounded = "rounded-lg",
}: {
  active: boolean;
  color?: string;
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className={`absolute inset-0 pointer-events-none ${rounded} z-[50]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className={`absolute inset-0 ${rounded}`}
              style={{ border: `2px solid ${color}50` }}
              animate={{
                boxShadow: [
                  `inset 0 0 12px ${color}15, 0 0 8px ${color}20`,
                  `inset 0 0 20px ${color}25, 0 0 16px ${color}30`,
                  `inset 0 0 12px ${color}15, 0 0 8px ${color}20`,
                ],
                borderColor: [`${color}40`, `${color}70`, `${color}40`],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Onboarding component                                         */
/* ------------------------------------------------------------------ */
export default function Onboarding({ step, onSkip }: OnboardingProps) {
  return (
    <div className="absolute inset-0 z-[200] pointer-events-none flex items-end justify-center pb-5">
      <AnimatePresence mode="wait">
        {step >= 0 && step < TOTAL_STEPS && (
          <StepCard key={`s${step}`} step={step} onSkip={onSkip} />
        )}
        {step === 5 && <SuccessBanner key="done" onDone={onSkip} />}
      </AnimatePresence>
    </div>
  );
}