import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

const ONBOARDING_STEPS = [
  {
    title: "Select a Shape",
    description: "Click on any shape in the composition to select it, or click the background to change the comp background color.",
    position: "left", // points to composition
  },
  {
    title: "Choose a Color",
    description: "Click any color in the palette to apply it to your selected shape or background.",
    position: "right", // points to color panel
  },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentStepData = ONBOARDING_STEPS[currentStep];
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      handleClose();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Subtle pointer arrows */}
      {currentStepData.position === "left" && (
        <div
          className="absolute z-50 pointer-events-none animate-pulse"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) translateX(-200px)",
          }}
        >
          <div className="relative">
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#5c9eff]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M8 16H24M24 16L18 10M24 16L18 22"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {currentStepData.position === "right" && (
        <div
          className="absolute z-50 pointer-events-none animate-pulse"
          style={{
            top: "50%",
            right: "340px",
            transform: "translateY(-50%)",
          }}
        >
          <div className="text-[#5c9eff]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 16H24M24 16L18 10M24 16L18 22"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Floating card */}
      <div
        className="absolute z-[60] pointer-events-none transition-all duration-500 ease-out"
        style={{
          top: currentStepData.position === "left" ? "45%" : "45%",
          left: currentStepData.position === "left" ? "50%" : "auto",
          right: currentStepData.position === "right" ? "50px" : "auto",
          transform: currentStepData.position === "left" ? "translate(-50%, -50%)" : "translateY(-50%)",
        }}
      >
        <div className="bg-[#2a2a2a]/95 backdrop-blur-sm rounded-lg shadow-2xl border border-[#5c9eff]/50 w-[320px] pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-[#404040]">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#5c9eff] animate-pulse" />
              <div className="text-[#5c9eff] text-xs font-semibold uppercase tracking-wide">
                Step {currentStep + 1} of {ONBOARDING_STEPS.length}
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-[#404040] rounded transition-colors group"
            >
              <X className="size-3.5 text-[#808080] group-hover:text-[#b0b0b0]" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-[#e0e0e0] text-base font-semibold mb-2">
              {currentStepData.title}
            </h3>
            <p className="text-[#b0b0b0] text-sm leading-relaxed">
              {currentStepData.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-3 border-t border-[#404040]">
            <button
              onClick={handleClose}
              className="text-[#808080] hover:text-[#b0b0b0] text-xs transition-colors"
            >
              Skip
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-1.5 bg-[#5c9eff] hover:bg-[#4a8de0] text-white text-xs font-medium rounded transition-colors flex items-center gap-1.5"
            >
              {isLastStep ? "Got it!" : "Next"}
              {!isLastStep && <ArrowRight className="size-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}