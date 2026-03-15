import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WelcomeOverlayProps {
  onStart: () => void;
}

/* ------------------------------------------------------------------ */
/*  The 3 comp shapes — hero identity                                 */
/* ------------------------------------------------------------------ */
const SHAPES = [
  { color: "#6cb2d2", w: 104, h: 104, rx: 14 },
  { color: "#d92525", w: 86, h: 86, rx: 14 },
  { color: "#45ea7f", w: 120, h: 66, rx: 14 },
];

/* Slow, organic breathing — enough to feel alive, not distracting */
const FLOAT = [
  { x: [-5, 5, -5], y: [-6, 3, -6], rotate: [-2, 1.5, -2], dur: 7 },
  { x: [4, -5, 4], y: [4, -4, 4], rotate: [1.5, -2, 1.5], dur: 8.5 },
  { x: [-3, 6, -3], y: [3, -5, 3], rotate: [-1.5, 2.5, -1.5], dur: 10 },
];

/* Triangular formation */
const POS = [
  { x: -90, y: -52 },
  { x: 66, y: -24 },
  { x: -12, y: 56 },
];

/* Scatter on exit */
const SCATTER = [
  { x: -300, y: -200, rotate: -22, scale: 0.35 },
  { x: 260, y: -190, rotate: 18, scale: 0.25 },
  { x: -50, y: 240, rotate: 10, scale: 0.45 },
];

/* ------------------------------------------------------------------ */
/*  Single shape with layered material                                */
/* ------------------------------------------------------------------ */
function FloatingShape({
  shape,
  index,
  exiting,
}: {
  shape: (typeof SHAPES)[0];
  index: number;
  exiting: boolean;
}) {
  const f = FLOAT[index];
  const p = POS[index];
  const sc = SCATTER[index];

  return (
    <motion.div
      className="absolute"
      style={{
        width: shape.w,
        height: shape.h,
        left: "50%",
        top: "50%",
        marginLeft: -shape.w / 2,
        marginTop: -shape.h / 2,
      }}
      initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.5, rotate: -8 }}
      animate={
        exiting
          ? {
              x: sc.x,
              y: sc.y,
              rotate: sc.rotate,
              scale: sc.scale,
              opacity: 0,
            }
          : { x: p.x, y: p.y, opacity: 1, scale: 1, rotate: 0 }
      }
      transition={
        exiting
          ? { duration: 0.65, ease: [0.32, 0, 0.24, 1] }
          : {
              opacity: { duration: 0.8, delay: 0.3 + index * 0.14 },
              scale: {
                type: "spring",
                stiffness: 160,
                damping: 20,
                delay: 0.3 + index * 0.14,
              },
              rotate: {
                type: "spring",
                stiffness: 160,
                damping: 20,
                delay: 0.3 + index * 0.14,
              },
              x: {
                duration: 0.8,
                delay: 0.3 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: 0.8,
                delay: 0.3 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
    >
      {/* Color bleed — soft interaction between shapes */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          inset: -24,
          borderRadius: 28,
          background: shape.color,
          filter: "blur(44px)",
          opacity: 0.22,
        }}
        animate={{ opacity: [0.16, 0.28, 0.16], scale: [0.96, 1.08, 0.96] }}
        transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shape body */}
      <motion.div
        className="relative w-full h-full"
        style={{
          backgroundColor: shape.color,
          borderRadius: shape.rx,
          boxShadow: `0 12px 40px ${shape.color}35, 0 2px 6px rgba(0,0,0,0.4)`,
        }}
        animate={{ x: f.x, y: f.y, rotate: f.rotate }}
        transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top specular — glass refraction feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: shape.rx,
            background:
              "linear-gradient(158deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 32%, transparent 52%)",
          }}
        />
        {/* Subtle inner edge light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: shape.rx,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.1)",
          }}
        />
        {/* Bottom darkening for volume */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "50%",
            borderRadius: `0 0 ${shape.rx}px ${shape.rx}px`,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.18) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Rotating conic gradient border for the CTA                        */
/* ------------------------------------------------------------------ */
function GlowButton({
  onClick,
  exiting,
}: {
  onClick: () => void;
  exiting: boolean;
}) {
  return (
    <motion.button
      className="relative cursor-pointer group outline-none overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 8 }}
      animate={
        exiting
          ? { opacity: 0, scale: 0.9, y: -8 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={
        exiting
          ? { duration: 0.25 }
          : { delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
      onClick={onClick}
    >
      {/* Inner fill */}
      <div
        className="relative flex items-center gap-3 px-7 py-2.5 rounded-xl border"
        style={{
          background: "rgba(28,28,32,0.75)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span
          className="text-[#999] group-hover:text-[#e0e0e0] transition-colors duration-300"
          style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.01em" }}
        >
          Start Demo
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-[#555] group-hover:text-[#aaa] transition-colors duration-300"
        >
          <path
            d="M5.25 3.5L8.75 7L5.25 10.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Skeleton shine animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
        animate={{ x: ["-200%", "200%"] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Main overlay                                                      */
/* ------------------------------------------------------------------ */
export default function WelcomeOverlay({ onStart }: WelcomeOverlayProps) {
  const [exiting, setExiting] = useState(false);

  const handleStart = useCallback(() => {
    setExiting(true);
    setTimeout(onStart, 750);
  }, [onStart]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="welcome"
          className="absolute inset-0 z-[500] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Liquid glass backdrop — translucent para ver o que espera */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(18,18,22,0.75) 0%, rgba(10,10,14,0.85) 100%)",
              backdropFilter: "blur(32px) saturate(1.4) brightness(0.95)",
              WebkitBackdropFilter: "blur(32px) saturate(1.4) brightness(0.95)",
            }}
          />

          {/* Liquid glass surface — refractive layer */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glass refraction edge — liquid glass border effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 92% 82% at 50% 45%, transparent 0%, rgba(108,178,210,0.08) 100%)",
              boxShadow:
                "inset 0 3px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.25)",
            }}
          />

          {/* Liquid glass reflection — top specular highlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.02) 30%, transparent 45%)",
              maskImage:
                "radial-gradient(ellipse 75% 65% at 50% 20%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 65% at 50% 20%, black 0%, transparent 70%)",
            }}
          />

          {/* Liquid glass side reflections — wet surface feel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.04) 100%)",
            }}
          />

          {/* Liquid glass bottom reflection — depth and volume */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 20%, transparent 35%)",
            }}
          />

          {/* Liquid distortion ripple — animated refraction */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(108,178,210,0.04) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Noise arte — film grain texture INTENSO */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              opacity: 0.25,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* Secondary noise layer — color variation */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-soft-light"
            style={{
              opacity: 0.12,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='turbulence' baseFrequency='4.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />

          {/* Ambient color atmosphere — single blended glow */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 900,
              height: 700,
              left: "50%",
              top: "40%",
              marginLeft: -450,
              marginTop: -350,
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(108,178,210,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 35%, rgba(217,37,37,0.08) 0%, transparent 50%), radial-gradient(ellipse at 45% 70%, rgba(69,234,127,0.10) 0%, transparent 50%)",
              filter: "blur(80px)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ---- Content ---- */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Shape cluster */}
            <div className="relative" style={{ width: 360, height: 280 }}>
              {SHAPES.map((s, i) => (
                <FloatingShape
                  key={i}
                  shape={s}
                  index={i}
                  exiting={exiting}
                />
              ))}
            </div>

            {/* Separator — thin gradient line */}
            <motion.div
              className="flex items-center gap-3 mt-10"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                exiting
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={
                exiting
                  ? { duration: 0.2 }
                  : { delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <div
                style={{
                  width: 60,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(108,178,210,0.35), transparent)",
                }}
              />
            </motion.div>

            {/* Typography */}
            <motion.div
              className="mt-7 text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={
                exiting ? { opacity: 0, y: -14 } : { opacity: 1, y: 0 }
              }
              transition={
                exiting
                  ? { duration: 0.3 }
                  : { delay: 0.65, duration: 0.65, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {/* Eyebrow label */}
              <motion.span
                className="block mb-4"
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: "#4a4a52",
                  textTransform: "uppercase",
                }}
                initial={{ opacity: 0 }}
                animate={exiting ? { opacity: 0 } : { opacity: 1 }}
                transition={
                  exiting
                    ? { duration: 0.15 }
                    : { delay: 0.7, duration: 0.5 }
                }
              >
                After Effects Script
              </motion.span>

              {/* Title — white with a very subtle cool-to-warm shift */}
              <h1
                style={{
                  fontSize: 42,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  background:
                    "linear-gradient(180deg, #f0f0f2 0%, #a0a0a8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Color Flow
              </h1>
            </motion.div>

            {/* CTA */}
            <div className="mt-11">
              <GlowButton onClick={handleStart} exiting={exiting} />
            </div>

            {/* Hint */}
            <motion.span
              className="mt-7 block"
              style={{
                fontSize: 10,
                color: "#2e2e34",
                letterSpacing: "0.04em",
              }}
              initial={{ opacity: 0 }}
              animate={exiting ? { opacity: 0 } : { opacity: 1 }}
              transition={exiting ? { duration: 0.15 } : { delay: 1.15 }}
            >
              interactive walkthrough included
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}