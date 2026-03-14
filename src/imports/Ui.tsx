import { useState } from "react";
import svgPaths from "./svg-bnrp5u04is";
import imgImage2 from "figma:asset/8c07bfc0f18877526650cd2e09de9954802612a3.png";
import imgChatGptImage28DeAbrDe20251623421 from "figma:asset/0c645feb2c7e66ebf2e4150f53a3fa49bfc02e66.png";

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

function Group2() {
  return (
    <div className="absolute contents left-[181px] top-[146px]">
      <div className="absolute bg-[#0e0e0e] left-[181px] rounded-[3px] size-[23px] top-[151px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute h-[34px] left-[185px] top-[146px] w-[16px]" data-name="ChatGPT Image 28 de abr. de 2025, 16_23_42 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-109.76%] max-w-none top-0 w-[209.76%]" src={imgChatGptImage28DeAbrDe20251623421} />
          </div>
          <div className="absolute bg-[#9a9a9a] inset-0 mix-blend-darken" />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[151px] top-[148px]">
      <div className="absolute bg-[#0e0e0e] left-[151px] rounded-[3px] size-[23px] top-[151px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute h-[29px] left-[155px] top-[148px] w-[15px]" data-name="ChatGPT Image 28 de abr. de 2025, 16_23_42 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-1.43%] max-w-none top-0 w-[194.29%]" src={imgChatGptImage28DeAbrDe20251623421} />
          </div>
          <div className="absolute bg-[#9a9a9a] inset-0 mix-blend-darken" />
        </div>
      </div>
    </div>
  );
}

export default function Ui() {
  const [shapeColor, setShapeColor] = useState("#d9d9d9");
  const [backgroundColor, setBackgroundColor] = useState("#1d1d1d");
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    if (selectedShape) {
      setShapeColor(color);
    } else {
      setBackgroundColor(color);
    }
  };

  const handleBackgroundClick = () => {
    setSelectedShape(null);
  };

  const handleShapeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedShape("shape1");
  };

  return (
    <div 
      className="bg-[#1d1d1d] overflow-clip relative rounded-[3px] size-full transition-colors duration-300" 
      data-name="UI"
      style={{ backgroundColor }}
      onClick={handleBackgroundClick}
    >
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
      <div className="absolute h-[14px] left-[162px] top-[75px] w-[15px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2192.86%] left-[-1046.67%] max-w-none top-[-450%] w-[1440%]" src={imgImage2} />
        </div>
      </div>
      <div className="absolute h-[14px] left-[135px] top-[75px] w-[15px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2192.86%] left-[-847.15%] max-w-none top-[-450%] w-[1440%]" src={imgImage2} />
        </div>
      </div>
      <div className="absolute left-[188px] size-[15px] top-[75px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2046.67%] left-[-1220%] max-w-none top-[-420%] w-[1440%]" src={imgImage2} />
        </div>
      </div>
      <div className="absolute left-[155px] size-[15px] top-[155px]" data-name="image 5" />
      <Group2 />
      <Group1 />
      <div 
        className="absolute h-[152px] left-[331px] rounded-[6px] top-[78px] w-[150px] cursor-pointer transition-all duration-200" 
        style={{ 
          backgroundColor: shapeColor,
          boxShadow: selectedShape === "shape1" ? "0 0 0 3px #5c9eff" : "none"
        }}
        onClick={handleShapeClick}
      />
    </div>
  );
}
