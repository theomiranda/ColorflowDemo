# Color Flow - Complete Project Files

This is a complete After Effects-inspired color selector application built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── AfterEffectsLayout.tsx
│   │       ├── Onboarding.tsx
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   ├── imports/
│   │   ├── UiScript.tsx
│   │   └── svg-bnrp5u04is.ts
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## Dependencies

### Required npm packages:
```json
{
  "dependencies": {
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "@vitejs/plugin-react": "^4.7.0",
    "tailwindcss": "^4.1.12",
    "vite": "^6.3.5"
  }
}
```

## Features

- ✨ Click on shapes to select them (blue ring appears)
- 🎨 Click colors to change selected shape's color
- 🖼️ Click background (no shape selected) to change composition background
- 🎯 Drag and drop shapes around the composition
- 👁️ Toggle layer visibility in timeline
- 📊 Timeline with layer management
- 🎓 Interactive onboarding tutorial

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Image Assets

The project uses the Figma asset system for images. You need these images:
- `8c07bfc0f18877526650cd2e09de9954802612a3.png`
- `0c645feb2c7e66ebf2e4150f53a3fa49bfc02e66.png`

These are referenced using the `figma:asset/` import scheme in UiScript.tsx.

**To use offline:** Replace the `figma:asset` imports with regular image imports:

```tsx
// Replace this:
import imgImage2 from "figma:asset/8c07bfc0f18877526650cd2e09de9954802612a3.png";

// With this:
import imgImage2 from "./assets/image2.png";
```

Then place your images in `/src/imports/assets/` directory.

## Font Requirements

The project uses the **Open Sans** font. Add this to `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
```

**For offline use**, download the font files and host them locally.

## Key Files

### 1. `/src/app/App.tsx`
Main entry point - wraps the layout in a fixed-size container (1051x765px)

### 2. `/src/app/components/AfterEffectsLayout.tsx`
Main layout component with:
- Composition viewport
- Timeline
- Right panel with color picker script
- Layer management logic
- Drag and drop functionality

### 3. `/src/app/components/Onboarding.tsx`
Interactive tutorial overlay with 2 steps

### 4. `/src/imports/UiScript.tsx`
Color picker UI panel (Figma import)

### 5. `/src/imports/svg-bnrp5u04is.ts`
SVG path data for UI elements

## Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### postcss.config.mjs
```javascript
export default {
  plugins: {
    tailwindcss: {},
  },
};
```

## Styling

The project uses Tailwind CSS v4 with custom theme tokens defined in `/src/styles/theme.css`.

Main color scheme:
- Background: `#1c1c1c`
- Panels: `#232323`
- Text: `#e0e0e0` / `#b0b0b0`
- Accent: `#5c9eff`

## Troubleshooting Offline Issues

If you get "offline" errors, it's likely due to:

1. **Missing Figma assets** - Replace `figma:asset` imports with local images
2. **Missing fonts** - Download and host Open Sans locally
3. **Missing dependencies** - Ensure all packages are installed

## License

This project was created with Figma Make.
