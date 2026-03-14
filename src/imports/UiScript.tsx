import svgPaths from "./svg-bnrp5u04is";

interface UiScriptProps {
  onColorChange: (color: string) => void;
}

const PALETTE_COLORS = [
  "#d92525", "#8c1f28", "#591c21", "#044040", "#296055", "#273835",
  "#6cb2d2", "#62a2bf", "#4f8096", "#3e6475", "#878d96", "#284741",
  "#39ffd9", "#12d8b2", "#4bc94b", "#45ea7f", "#142d14", "#370057",
];

function Rectangle({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[286px] left-px top-[12px] w-[222px]"}>
      <div className="absolute bg-[#232323] inset-0 rounded-[7px]" />
    </div>
  );
}

/* ---- Inline SVG icons ---- */

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="8" height="5" viewBox="0 0 8 5" fill="none">
      <path d="M1 1L4 4L7 1" stroke="#9a9a9a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon({ className, size = 11 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M6.8 1.6h2.4l.3 1.7.9.4 1.5-.9 1.7 1.7-.9 1.5.4.9 1.7.3v2.4l-1.7.3-.4.9.9 1.5-1.7 1.7-1.5-.9-.9.4-.3 1.7H6.8l-.3-1.7-.9-.4-1.5.9-1.7-1.7.9-1.5-.4-.9-1.7-.3V6.8l1.7-.3.4-.9-.9-1.5 1.7-1.7 1.5.9.9-.4.3-1.7z"
        stroke="#7a7a7a"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2.2" stroke="#7a7a7a" strokeWidth="1.1" />
    </svg>
  );
}

function InfinityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path
        d="M3.5 1C1.5 1 0.5 2.5 0.5 4S1.5 7 3.5 7C5 7 6 5.8 7 4C8 2.2 9 1 10.5 1C12.5 1 13.5 2.5 13.5 4S12.5 7 10.5 7C9 7 8 5.8 7 4"
        stroke="#7a7a7a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaletteIcon({ className, size = 12 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7c.69 0 1.25-.56 1.25-1.25 0-.32-.12-.61-.33-.83-.2-.21-.31-.5-.31-.82 0-.69.56-1.25 1.25-1.25H10.5c2.49 0 4.5-2.01 4.5-4.5C15 3.58 11.866 1 8 1z"
        stroke="#7a7a7a"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <circle cx="4.75" cy="6.5" r="1" fill="#7a7a7a" />
      <circle cx="7" cy="4.25" r="1" fill="#7a7a7a" />
      <circle cx="10" cy="4.75" r="1" fill="#7a7a7a" />
      <circle cx="11.75" cy="7.25" r="1" fill="#7a7a7a" />
    </svg>
  );
}

/* ---- Button groups ---- */

function Group5() {
  return (
    <div className="absolute contents left-[21px] top-[101px]">
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[21px] rounded-[3px] top-[101px] w-[58px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[33px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[86px] top-[101px]">
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[86px] rounded-[3px] top-[101px] w-[58px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[98px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Delete
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[121px] top-[151px]">
      <div className="absolute bg-[#0e0e0e] left-[121px] rounded-[3px] size-[23px] top-[151px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[130px] text-[#9a9a9a] text-[14px] top-[152px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        -
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[91px] top-[151px]">
      <div className="absolute bg-[#0e0e0e] left-[91px] rounded-[3px] size-[23px] top-[151px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[98px] text-[#9a9a9a] text-[14px] top-[153px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +
      </p>
    </div>
  );
}

/* Infinity button — HEX row */
function GroupInfinity({ onRandomColor }: { onRandomColor: () => void }) {
  return (
    <div className="absolute contents">
      <div
        className="absolute bg-[#0e0e0e] left-[151px] rounded-[3px] size-[23px] top-[151px] cursor-pointer hover:bg-[#1a1a1a] transition-colors"
        onClick={onRandomColor}
      >
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute left-[155.5px] top-[158px] pointer-events-none">
        <InfinityIcon />
      </div>
    </div>
  );
}

/* Gear button — HEX row */
function GroupHexGear() {
  return (
    <div className="absolute contents">
      <div className="absolute bg-[#0e0e0e] left-[181px] rounded-[3px] size-[23px] top-[151px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute left-[187px] top-[157px]">
        <PaletteIcon size={11} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[151px] top-[101px]">
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[151px] rounded-[3px] top-[101px] w-[58px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[163px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Import
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[94px] top-[18px]">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[115px] text-[#9a9a9a] text-[11px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label Flow
      </p>
      <div className="absolute left-[94px] size-[12px] top-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #0E0E0E)" id="Ellipse 1" r="5" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Group({ onColorClick }: { onColorClick: (color: string) => void }) {
  const colors = PALETTE_COLORS.map((color, i) => {
    const col = i % 6;
    const row = Math.floor(i / 6);
    return {
      color,
      left: `${22 + col * 31}px`,
      top: `${207 + row * 25}px`,
    };
  });

  return (
    <div className="absolute contents left-[22px] top-[207px]">
      {colors.map((item, index) => (
        <div
          key={index}
          className="absolute h-[22px] w-[27px] cursor-pointer hover:opacity-80 transition-opacity"
          style={{ backgroundColor: item.color, left: item.left, top: item.top }}
          onClick={() => onColorClick(item.color)}
        />
      ))}
    </div>
  );
}

export default function UiScript({ onColorChange }: UiScriptProps) {
  const handleColorClick = (color: string) => {
    onColorChange(color);
  };

  const handleRandomColor = () => {
    const randomColor = PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];
    onColorChange(randomColor);
  };

  return (
    <div className="overflow-clip relative w-[224px] h-[312px] rounded-[10px] px-[0px] py-[13px] bg-[#232323]" data-name="UI" style={{ transform: "scale(1.8)", transformOrigin: "center" }}>
      <Rectangle />
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[21px] rounded-[3px] top-[151px] w-[63px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute h-[45px] left-[9px] top-[140px] w-[207px]">
        <div className="absolute inset-[-1.11%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 46">
            <path d={svgPaths.p30c4ed80} id="Rectangle 12" stroke="var(--stroke-0, #303030)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[70px] left-[9px] top-[60px] w-[207px]">
        <div className="absolute inset-[-0.71%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 71">
            <path d={svgPaths.p38503a80} id="Rectangle 13" stroke="var(--stroke-0, #303030)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[94px] left-[9px] top-[195px] w-[207px]">
        <div className="absolute inset-[-0.53%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 95">
            <path d={svgPaths.p3bec9f00} id="Rectangle 14" stroke="var(--stroke-0, #303030)" />
          </svg>
        </div>
      </div>

      {/* Palette dropdown */}
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[65px] rounded-[3px] top-[71px] w-[88px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>

      {/* Palette row — chevron/down icon button */}
      <div className="absolute bg-[#0e0e0e] left-[157px] rounded-[3px] size-[23px] top-[71px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      {/* Chevron ▼ inside dropdown button */}
      <div className="absolute left-[164.5px] top-[80px]">
        <ChevronDownIcon />
      </div>

      {/* Palette row — gear icon button */}
      <div className="absolute bg-[#0e0e0e] left-[184px] rounded-[3px] size-[23px] top-[71px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute left-[190px] top-[77px]">
        <GearIcon size={11} />
      </div>

      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[19px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Palette:
      </p>
      <Group5 />

      {/* Dropdown text + chevron inside the dropdown field */}
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[74px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Harmonics
      </p>
      {/* Inline chevron inside dropdown */}
      <div className="absolute left-[138px] top-[80px]">
        <ChevronDownIcon />
      </div>

      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[29px] text-[#9a9a9a] text-[11px] top-[155px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #5AF1SA
      </p>
      <Group6 />
      <Group3 />
      <Group4 />
      <GroupInfinity onRandomColor={handleRandomColor} />
      <GroupHexGear />
      <Group7 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[20px] text-[#9a9a9a] text-[11px] top-[132px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        HEX
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[20px] text-[#9a9a9a] text-[11px] top-[187px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Color Grid
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[19px] text-[#9a9a9a] text-[11px] top-[52px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Color Palettes
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[29px] text-[#9a9a9a] text-[11px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Layer Flow
      </p>
      <Group8 />
      <div className="absolute left-[8px] size-[12px] top-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #0E0E0E)" id="Ellipse 3" r="4" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="4" />
        </svg>
      </div>
      <Group onColorClick={handleColorClick} />
    </div>
  );
}