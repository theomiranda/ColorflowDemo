import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WelcomeOverlayProps {
  onStart: () => void;
}

/* The 3 real shapes from the comp, used as the visual identity */
const SHAPES = [
  { color: "#6cb2d2", w: 82, h: 82, rx: 6 },
  { color: "#d92525", w: 68, h: 68, rx: 6 },
  { color: "#45ea7f", w: 94, h: 52, rx: 6 },
];

/* Each shape orbits gently in its own elliptical path */
const FLOAT = [
  { x: [-6, 6, -6], y: [-8, 4, -8], rotate: [-3, 2, -3], dur: 6 },
  { x: [5, -7, 5], y: [6, -5, 6], rotate: [2, -3, 2], dur: 7 },
  { x: [-4, 8, -4], y: [3, -7, 3], rotate: [-2, 4, -2], dur: 8 },
];

/* Shape positions in the "logo formation" */
const POS = [
  { x: -72, y: -44 },
  { x: 52, y: -20 },
  { x: -10, y: 46 },
];

/* Scatter targets when exiting */
const SCATTER = [
  { x: -260, y: -180, rotate: -25, scale: 0.5 },
  { x: 220, y: -160, rotate: 20, scale: 0.4 },
  { x: -40, y: 200, rotate: 12, scale: 0.6 },
];

export default function WelcomeOverlay({ onStart }: WelcomeOverlayProps) {
  const [exiting, setExiting] = useState(false);

  const handleStart = useCallback(() => {
    setExiting(true);
    setTimeout(onStart, 700);
  }, [onStart]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="welcome"
          className="absolute inset-0 z-[500] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {/* Backdrop — vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(18,18,22,0.88) 0%, rgba(8,8,10,0.97) 100%)",
            }}
          />

          {/* ---- Floating shapes ---- */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Shape cluster */}
            <div className="relative" style={{ width: 220, height: 180 }}>
              {SHAPES.map((s, i) => {
                const f = FLOAT[i];
                const p = POS[i];
                const sc = SCATTER[i];
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: s.w,
                      height: s.h,
                      left: "50%",
                      top: "50%",
                      marginLeft: -s.w / 2,
                      marginTop: -s.h / 2,
                    }}
                    initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
                    animate={
                      exiting
                        ? {
                            x: sc.x,
                            y: sc.y,
                            rotate: sc.rotate,
                            scale: sc.scale,
                            opacity: 0,
                          }
                        : {
                            x: p.x,
                            y: p.y,
                            opacity: 1,
                            scale: 1,
                          }
                    }
                    transition={
                      exiting
                        ? { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                        : {
                            opacity: { duration: 0.5, delay: 0.1 + i * 0.12 },
                            scale: {
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 0.1 + i * 0.12,
                            },
                            x: { duration: 0.5, delay: 0.1 + i * 0.12 },
                            y: { duration: 0.5, delay: 0.1 + i * 0.12 },
                          }
                    }
                  >
                    {/* Color bleed — soft glow underneath */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: s.color,
                        filter: "blur(28px)",
                        opacity: 0.35,
                      }}
                      animate={{
                        opacity: [0.25, 0.45, 0.25],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: f.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Actual shape */}
                    <motion.div
                      className="relative w-full h-full"
                      style={{
                        backgroundColor: s.color,
                        borderRadius: s.rx,
                        boxShadow: `0 2px 20px ${s.color}40`,
                      }}
                      animate={{
                        x: f.x,
                        y: f.y,
                        rotate: f.rotate,
                      }}
                      transition={{
                        duration: f.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Glass specular highlight */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          borderRadius: s.rx,
                          background:
                            "linear-gradient(165deg, rgba(255,255,255,0.22) 0%, transparent 45%)",
                        }}
                      />
                      {/* Bottom edge light */}
                      <div
                        className="absolute inset-x-0 bottom-0 pointer-events-none"
                        style={{
                          height: "40%",
                          borderRadius: `0 0 ${s.rx}px ${s.rx}px`,
                          background:
                            "linear-gradient(0deg, rgba(0,0,0,0.18) 0%, transparent 100%)",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Title */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={
                exiting
                  ? { opacity: 0, y: -15 }
                  : { opacity: 1, y: 0 }
              }
              transition={
                exiting
                  ? { duration: 0.3 }
                  : { delay: 0.4, duration: 0.5 }
              }
            >
              <h1
                className="text-white"
                style={{
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Color Flow
              </h1>
              <p
                className="text-[#666] mt-2"
                style={{ fontSize: 12, lineHeight: 1.5 }}
              >
                shape recolor tool for After Effects
              </p>
            </motion.div>

            {/* Start button — minimal, just a line and text */}
            <motion.button
              className="relative mt-8 cursor-pointer group"
              initial={{ opacity: 0 }}
              animate={exiting ? { opacity: 0, scale: 0.9 } : { opacity: 1 }}
              transition={exiting ? { duration: 0.2 } : { delay: 0.65, duration: 0.4 }}
              onClick={handleStart}
            >
              <div
                className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Animated arrow */}
                <span
                  className="text-[#ccc] group-hover:text-white transition-colors"
                  style={{ fontSize: 13, fontWeight: 500 }}
                >
                  Start Demo
                </span>
                <motion.span
                  className="text-[#888] group-hover:text-white transition-colors"
                  style={{ fontSize: 15 }}
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 24px rgba(108,178,210,0.12), 0 0 24px rgba(69,234,127,0.08)",
                }}
              />
            </motion.button>

            {/* Subtle shortcut hint */}
            <motion.span
              className="text-[#444] mt-4 block"
              style={{ fontSize: 10 }}
              initial={{ opacity: 0 }}
              animate={exiting ? { opacity: 0 } : { opacity: 1 }}
              transition={exiting ? { duration: 0.15 } : { delay: 0.85 }}
            >
              interactive walkthrough
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
