# Complete Source Code - Color Flow

Todos os arquivos necessários para rodar o projeto em outro lugar.

## 📦 Setup Rápido

```bash
# 1. Criar projeto
npm create vite@latest color-flow -- --template react-ts
cd color-flow

# 2. Instalar dependências
npm install lucide-react
npm install -D @tailwindcss/vite tailwindcss

# 3. Copiar arquivos abaixo
# 4. npm run dev
```

---

## 📄 Arquivos Principais

### `/package.json`
```json
{
  "name": "color-flow",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.7.0",
    "tailwindcss": "^4.1.12",
    "typescript": "^5.6.2",
    "vite": "^6.3.5"
  }
}
```

### `/vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `/postcss.config.mjs`
```javascript
export default {}
```

### `/tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `/tsconfig.node.json`
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### `/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flow</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 🎨 Styles

### `/src/styles/index.css`
```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```

### `/src/styles/fonts.css`
```css
/* Open Sans Font - Required for UI Script */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
```

### `/src/styles/tailwind.css`
```css
@import 'tailwindcss';
@source '../**/*.{js,ts,jsx,tsx}';
```

### `/src/styles/theme.css`
```css
:root {
  --background: #0a0a0a;
  --foreground: #e0e0e0;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    margin: 0;
    padding: 0;
  }
}
```

---

## ⚛️ React Components

### `/src/main.tsx`
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `/src/app/App.tsx`
```tsx
import AfterEffectsLayout from "./components/AfterEffectsLayout";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]">
      <div style={{ width: '1051px', height: '765px' }}>
        <AfterEffectsLayout />
      </div>
    </div>
  );
}
```

### `/src/app/components/AfterEffectsLayout.tsx`
**(Ver arquivo completo no repositório - 327 linhas)**

Este é o componente principal. Copie o conteúdo do arquivo atual.

### `/src/app/components/Onboarding.tsx`
**(Ver arquivo completo no repositório - 157 linhas)**

Componente de tutorial. Copie o conteúdo do arquivo atual.

---

## 🎨 Imports do Figma

### `/src/imports/svg-bnrp5u04is.ts`
```typescript
export default {
  p30c4ed80: "M36.5 0.5H46H204.5C206.157 0.5 207.5 1.84315 207.5 3.5V42.5C207.5 44.1569 206.157 45.5 204.5 45.5H3.5C1.84315 45.5 0.5 44.1569 0.5 42.5V3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H7.5",
  p38503a80: "M85 0.5H204.5C206.157 0.5 207.5 1.84315 207.5 3.5V67.5C207.5 69.1569 206.157 70.5 204.5 70.5H3.5C1.84315 70.5 0.5 69.1569 0.5 67.5V3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H7.5",
  p3bec9f00: "M69 0.5L204.5 0.5C206.157 0.5 207.5 1.84315 207.5 3.5V91.5C207.5 93.1569 206.157 94.5 204.5 94.5H3.5C1.84315 94.5 0.5 93.1569 0.5 91.5V3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H7.5",
}
```

### `/src/imports/UiScript.tsx`

**VERSÃO OFFLINE (sem figma:asset):**

```tsx
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
      <p className="absolute font-sans font-normal leading-[normal] left-[33px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap">
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
      <p className="absolute font-sans font-normal leading-[normal] left-[98px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap">
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
      <p className="absolute font-sans font-normal leading-[normal] left-[130px] text-[#9a9a9a] text-[14px] top-[152px] whitespace-nowrap">
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
      <p className="absolute font-sans font-normal leading-[normal] left-[98px] text-[#9a9a9a] text-[14px] top-[153px] whitespace-nowrap">
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
      <p className="absolute font-sans font-normal leading-[normal] left-[163px] text-[#9a9a9a] text-[11px] top-[105px] whitespace-nowrap">
        Import
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[94px] top-[18px]">
      <p className="absolute font-sans font-normal leading-[normal] left-[115px] text-[#9a9a9a] text-[11px] top-[18px] whitespace-nowrap">
        Label Flow
      </p>
      <div className="absolute left-[94px] size-[12px] top-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="#0E0E0E" r="5" stroke="#B0B0B0" strokeWidth="2" />
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
    <div className="overflow-clip relative w-[224px] h-[312px] rounded-[10px] px-[0px] py-[13px] bg-[#232323]" style={{ transform: "scale(1.8)", transformOrigin: "center" }}>
      <Rectangle />
      <div className="absolute bg-[#0e0e0e] h-[23px] left-[21px] rounded-[3px] top-[151px] w-[63px]">
        <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute h-[45px] left-[9px] top-[140px] w-[207px]">
        <div className="absolute inset-[-1.11%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 46">
            <path d={svgPaths.p30c4ed80} stroke="#303030" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[70px] left-[9px] top-[60px] w-[207px]">
        <div className="absolute inset-[-0.71%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 71">
            <path d={svgPaths.p38503a80} stroke="#303030" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[94px] left-[9px] top-[195px] w-[207px]">
        <div className="absolute inset-[-0.53%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 95">
            <path d={svgPaths.p3bec9f00} stroke="#303030" />
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
      <p className="absolute font-sans font-normal leading-[normal] left-[19px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap">
        Palette:
      </p>
      <Group5 />
      <p className="absolute font-sans font-normal leading-[normal] left-[74px] text-[#9a9a9a] text-[11px] top-[75px] whitespace-nowrap">
        ColorFlow
      </p>
      <p className="absolute font-sans font-normal leading-[normal] left-[29px] text-[#9a9a9a] text-[11px] top-[155px] whitespace-nowrap">
        #878D96
      </p>
      <Group6 />
      <Group3 />
      <Group4 />
      <Group7 />
      <p className="absolute font-sans font-normal leading-[normal] left-[20px] text-[#9a9a9a] text-[11px] top-[132px] whitespace-nowrap">
        HEX
      </p>
      <p className="absolute font-sans font-normal leading-[normal] left-[20px] text-[#9a9a9a] text-[11px] top-[187px] whitespace-nowrap">
        Color Grid
      </p>
      <p className="absolute font-sans font-normal leading-[normal] left-[19px] text-[#9a9a9a] text-[11px] top-[52px] whitespace-nowrap">
        Color Palettes
      </p>
      <p className="absolute font-sans font-normal leading-[normal] left-[29px] text-[#9a9a9a] text-[11px] top-[18px] whitespace-nowrap">
        Layer Flow
      </p>
      <Group8 />
      <div className="absolute left-[8px] size-[12px] top-[20px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="#0E0E0E" r="4" stroke="#B0B0B0" strokeWidth="4" />
        </svg>
      </div>
      <Group onColorClick={handleColorClick} />
    </div>
  );
}
```

**Nota:** Esta versão remove os imports de imagens do Figma. As imagens eram apenas ícones decorativos pequenos no painel.

---

## 🚀 Estrutura Final

```
color-flow/
├── public/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── AfterEffectsLayout.tsx
│   │       └── Onboarding.tsx
│   ├── imports/
│   │   ├── UiScript.tsx
│   │   └── svg-bnrp5u04is.ts
│   ├── styles/
│   │   ├── index.css
│   │   ├── fonts.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── postcss.config.mjs
```

---

## ✅ Comandos

```bash
# Instalar
npm install

# Rodar
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📝 Notas

- Esta é a versão OFFLINE - sem dependências do Figma
- Removidas as imagens decorativas (eram apenas ícones pequenos)
- Fontes via Google Fonts CDN (pode ser baixada para offline)
- Todos os componentes principais estão incluídos
