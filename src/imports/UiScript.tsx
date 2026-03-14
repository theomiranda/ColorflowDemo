import svgPaths from "./svg-bnrp5u04is";

interface UiScriptProps {
  onColorChange: (color: string) => void;
}

function Rectangle({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[286px] left-px top-[12px] w-[222px]"}>
      <div className="absolute bg-[#232323] inset-0 rounded-[7px]" />
    </div>
  );
}

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
  const colors = [
    { color: "#d92525", left: "22px", top: "207px" },
    { color: "#8c1f28", left: "53px", top: "207px" },
    { color: "#591c21", left: "84px", top: "207px" },
    { color: "#044040", left: "115px", top: "207px" },
    { color: "#296055", left: "146px", top: "207px" },
    { color: "#273835", left: "177px", top: "207px" },
    { color: "#6cb2d2", left: "22px", top: "232px" },
    { color: "#62a2bf", left: "53px", top: "232px" },
    { color: "#4f8096", left: "84px", top: "232px" },
    { color: "#3e6475", left: "115px", top: "232px" },
    { color: "#878d96", left: "146px", top: "232px" },
    { color: "#284741", left: "177px", top: "232px" },
    { color: "#39ffd9", left: "22px", top: "257px" },
    { color: "#12d8b2", left: "53px", top: "257px" },
    { color: "#4bc94b", left: "84px", top: "257px" },
    { color: "#45ea7f", left: "115px", top: "257px" },
    { color: "#142d14", left: "146px", top: "257px" },
    { color: "#370057", left: "177px", top: "257px" },
  ];

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
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[65px] rounded-[3px] top-[71px] w-[88px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute bg-[#0e0e0e] left-[157px] rounded-[3px] size-[23px] top-[71px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute bg-[#0e0e0e] left-[184px] rounded-[3px] size-[23px] top-[71px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[19px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Palette:
      </p>
      <Group5 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[74px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ColorFlow
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[29px] text-[#9a9a9a] text-[11px] top-[155px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        #878D96
      </p>
      <Group6 />
      <Group3 />
      <Group4 />
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
