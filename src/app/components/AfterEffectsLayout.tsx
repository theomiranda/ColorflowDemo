import { useState, useRef, useEffect, useCallback } from "react";
import { Eye, EyeOff, ChevronDown, HelpCircle } from "lucide-react";
import UiScript from "../../imports/UiScript";
import Onboarding, {
  OnboardingGlow,
  type OnboardingStep,
} from "./Onboarding";

interface Layer {
  id: string;
  name: string;
  color: string;
  visible: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const INITIAL_LAYERS: Layer[] = [
  {
    id: "1",
    name: "Shape Layer 1",
    color: "#6cb2d2",
    visible: true,
    position: { x: 120, y: 80 },
    size: { width: 140, height: 140 },
  },
  {
    id: "2",
    name: "Shape Layer 2",
    color: "#d92525",
    visible: true,
    position: { x: 320, y: 120 },
    size: { width: 120, height: 120 },
  },
  {
    id: "3",
    name: "Shape Layer 3",
    color: "#45ea7f",
    visible: true,
    position: { x: 220, y: 260 },
    size: { width: 160, height: 90 },
  },
];

export default function AfterEffectsLayout() {
  const [layers, setLayers] = useState<Layer[]>(INITIAL_LAYERS);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#1a1a1a");
  const [draggingLayerId, setDraggingLayerId] = useState<string | null>(null);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const layerStartPos = useRef<{ x: number; y: number } | null>(null);
  const hasDragged = useRef(false);

  // Onboarding state: 0=select shape, 1=pick color, 2=deselect, 3=change bg, 4=done
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>(0);

  const dismissOnboarding = useCallback(() => {
    setShowOnboarding(false);
  }, []);

  const restartOnboarding = useCallback(() => {
    setOnboardingStep(0);
    setSelectedLayerId(null);
    setShowOnboarding(true);
  }, []);

  // Step 0 → 1: user selects a shape
  const handleShapeSelect = useCallback(
    (layerId: string) => {
      setSelectedLayerId(layerId);
      if (showOnboarding && onboardingStep === 0) {
        setOnboardingStep(1);
      }
    },
    [showOnboarding, onboardingStep]
  );

  // Step 2 → 3: user clicks empty background (deselects)
  const handleBackgroundClick = useCallback(() => {
    setSelectedLayerId(null);
    if (showOnboarding && onboardingStep === 2) {
      setOnboardingStep(3);
    }
  }, [showOnboarding, onboardingStep]);

  // Step 1 → 2 (color with shape) or Step 3 → 4 (color without shape = bg)
  const handleColorChange = useCallback(
    (color: string) => {
      if (selectedLayerId) {
        setLayers((prev) =>
          prev.map((layer) =>
            layer.id === selectedLayerId ? { ...layer, color } : layer
          )
        );
        if (showOnboarding && onboardingStep === 1) {
          setOnboardingStep(2);
        }
      } else {
        setBackgroundColor(color);
        if (showOnboarding && onboardingStep === 3) {
          setOnboardingStep(4);
        }
      }
    },
    [selectedLayerId, showOnboarding, onboardingStep]
  );

  const toggleVisibility = (id: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, visible: !layer.visible } : layer
      )
    );
  };

  const handleShapeMouseDown = (e: React.MouseEvent, layerId: string) => {
    e.stopPropagation();
    const layer = layers.find((l) => l.id === layerId);
    if (!layer) return;
    setDraggingLayerId(layerId);
    hasDragged.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    layerStartPos.current = { x: layer.position.x, y: layer.position.y };
  };

  const handleShapeClick = (e: React.MouseEvent, layerId: string) => {
    e.stopPropagation();
    if (!hasDragged.current) {
      handleShapeSelect(layerId);
    }
  };

  // Drag handling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !draggingLayerId ||
        !dragStartPos.current ||
        !layerStartPos.current
      )
        return;

      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;

      if (
        !hasDragged.current &&
        Math.abs(deltaX) <= 3 &&
        Math.abs(deltaY) <= 3
      ) {
        return;
      }

      if (!hasDragged.current) {
        hasDragged.current = true;
      }

      const startX = layerStartPos.current.x;
      const startY = layerStartPos.current.y;

      setLayers((prev) =>
        prev.map((layer) =>
          layer.id === draggingLayerId
            ? {
                ...layer,
                position: { x: startX + deltaX, y: startY + deltaY },
              }
            : layer
        )
      );
    };

    const handleMouseUp = () => {
      setDraggingLayerId(null);
      dragStartPos.current = null;
      layerStartPos.current = null;
      setTimeout(() => {
        hasDragged.current = false;
      }, 50);
    };

    if (draggingLayerId) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [draggingLayerId]);

  // Glow targets: steps 0,2 = comp viewport; steps 1,3 = right panel
  const glowComp =
    showOnboarding && (onboardingStep === 0 || onboardingStep === 2);
  const glowPanel =
    showOnboarding && (onboardingStep === 1 || onboardingStep === 3);

  const glowCompColor =
    onboardingStep === 0 ? "#5c9eff" : "#f0a030";
  const glowPanelColor =
    onboardingStep === 1 ? "#45ea7f" : "#c084fc";

  return (
    <div className="w-full h-full bg-[#1c1c1c] flex flex-col overflow-hidden relative">
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#232323] border-b border-[#0a0a0a] flex items-center px-3 gap-4">
        <span className="text-[#b0b0b0] text-xs font-medium">
          Composition
        </span>
        <span className="text-[#808080] text-xs">File</span>
        <span className="text-[#808080] text-xs">Edit</span>
        <span className="text-[#808080] text-xs">Layer</span>
        <span className="text-[#808080] text-xs">Effect</span>
        <div className="ml-auto">
          {!showOnboarding && (
            <button
              onClick={restartOnboarding}
              className="p-1 hover:bg-[#404040] rounded transition-colors"
              title="Show tutorial"
            >
              <HelpCircle className="size-3.5 text-[#666] hover:text-[#aaa]" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Panel - Composition/Viewport */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="h-10 bg-[#2a2a2a] border-b border-[#0a0a0a] flex items-center px-3 gap-2">
            <button className="px-3 py-1 bg-[#404040] hover:bg-[#4a4a4a] text-[#e0e0e0] text-xs rounded transition-colors">
              Selection Tool
            </button>
            <button className="px-3 py-1 bg-[#333333] hover:bg-[#3d3d3d] text-[#b0b0b0] text-xs rounded transition-colors">
              Hand Tool
            </button>
            <div className="ml-auto text-[#b0b0b0] text-xs">100%</div>
          </div>

          {/* Viewport */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <OnboardingGlow
              active={glowComp}
              color={glowCompColor}
            >
              <div
                className="relative rounded-lg shadow-2xl transition-colors duration-300"
                style={{
                  backgroundColor,
                  width: "600px",
                  height: "400px",
                  border: "1px solid #404040",
                }}
                onClick={handleBackgroundClick}
              >
                {/* Render Layers */}
                {layers
                  .slice()
                  .reverse()
                  .map((layer) => {
                    if (!layer.visible) return null;
                    return (
                      <div
                        key={layer.id}
                        className={`absolute rounded transition-all duration-200 cursor-move select-none ${
                          selectedLayerId === layer.id
                            ? "ring-2 ring-[#5c9eff] ring-offset-2 ring-offset-transparent"
                            : ""
                        } ${
                          draggingLayerId === layer.id
                            ? "cursor-grabbing"
                            : "cursor-grab"
                        }`}
                        style={{
                          backgroundColor: layer.color,
                          left: `${layer.position.x}px`,
                          top: `${layer.position.y}px`,
                          width: `${layer.size.width}px`,
                          height: `${layer.size.height}px`,
                        }}
                        onMouseDown={(e) => handleShapeMouseDown(e, layer.id)}
                        onClick={(e) => handleShapeClick(e, layer.id)}
                      />
                    );
                  })}

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>
            </OnboardingGlow>
          </div>
        </div>

        {/* Right Panel - Script UI */}
        <OnboardingGlow
          active={glowPanel}
          color={glowPanelColor}
          rounded="rounded-none"
          className="w-[680px] flex flex-col"
        >
          <div className="bg-[#232323] border-l border-[#0a0a0a] flex flex-col flex-1">
            {/* Panel Header */}
            <div className="h-9 bg-[#2a2a2a] border-b border-[#0a0a0a] flex items-center px-3">
              <ChevronDown className="size-4 text-[#b0b0b0] mr-2" />
              <span className="text-[#b0b0b0] text-xs font-medium">
                Color Flow Script
              </span>
            </div>

            {/* Script Content */}
            <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
              <UiScript onColorChange={handleColorChange} />
            </div>
          </div>
        </OnboardingGlow>
      </div>

      {/* Bottom Timeline */}
      <div className="h-40 bg-[#1f1f1f] border-t border-[#0a0a0a] flex flex-col">
        <div className="h-8 bg-[#252525] border-b border-[#0a0a0a] flex items-center px-3">
          <span className="text-[#b0b0b0] text-xs font-medium">Timeline</span>
          <div className="ml-auto flex items-center gap-2 text-[#808080] text-xs">
            <span>0:00:00:00</span>
            <span>•</span>
            <span>30 fps</span>
          </div>
        </div>

        {/* Layers List */}
        <div className="flex-1 overflow-y-auto">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className={`h-10 border-b border-[#1a1a1a] flex items-center px-2 gap-2 cursor-pointer transition-colors ${
                selectedLayerId === layer.id
                  ? "bg-[#3d5a80]"
                  : "hover:bg-[#2a2a2a]"
              }`}
              onClick={() => handleShapeSelect(layer.id)}
            >
              {/* Visibility Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVisibility(layer.id);
                }}
                className="p-1 hover:bg-[#404040] rounded transition-colors"
              >
                {layer.visible ? (
                  <Eye className="size-3.5 text-[#b0b0b0]" />
                ) : (
                  <EyeOff className="size-3.5 text-[#606060]" />
                )}
              </button>

              {/* Color Indicator */}
              <div
                className="size-4 rounded border border-[#404040]"
                style={{ backgroundColor: layer.color }}
              />

              {/* Layer Name */}
              <span className="text-[#e0e0e0] text-xs flex-1 truncate">
                {layer.name}
              </span>

              {/* Timeline Duration */}
              <div className="flex-1 h-full relative">
                <div
                  className="absolute h-full rounded"
                  style={{
                    backgroundColor: `${layer.color}40`,
                    left: "0",
                    right: "20%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding */}
      {showOnboarding && (
        <Onboarding step={onboardingStep} onSkip={dismissOnboarding} />
      )}
    </div>
  );
}
