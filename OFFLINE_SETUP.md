# Configuração Offline - Color Flow

Se você está tendo problemas com recursos "offline", siga este guia para configurar o projeto para funcionar completamente offline.

## 🎯 Problema

O projeto usa recursos externos que podem não estar disponíveis offline:
1. **Imagens Figma** - Sistema `figma:asset` 
2. **Google Fonts** - Open Sans carregada da CDN

## 🔧 Solução Completa

### 1. Substituir Imagens Figma

#### Passo 1: Criar pasta de assets
```bash
mkdir -p src/imports/assets
```

#### Passo 2: Adicionar imagens
Coloque suas próprias imagens na pasta `/src/imports/assets/`:
- `icon-image.png` (qualquer ícone pequeno ~15x15px)
- `button-icon.png` (outro ícone pequeno)

#### Passo 3: Atualizar UiScript.tsx

Abra `/src/imports/UiScript.tsx` e substitua as linhas 3-4:

**ANTES:**
```tsx
import imgImage2 from "figma:asset/8c07bfc0f18877526650cd2e09de9954802612a3.png";
import imgChatGptImage28DeAbrDe20251623421 from "figma:asset/0c645feb2c7e66ebf2e4150f53a3fa49bfc02e66.png";
```

**DEPOIS:**
```tsx
import imgImage2 from "./assets/icon-image.png";
import imgChatGptImage28DeAbrDe20251623421 from "./assets/button-icon.png";
```

### 2. Configurar Google Fonts Offline

#### Opção A: Download Manual (Recomendado para offline total)

1. Baixe a fonte Open Sans de [Google Fonts](https://fonts.google.com/specimen/Open+Sans)
2. Coloque os arquivos `.woff2` em `/public/fonts/open-sans/`
3. Atualize `/src/styles/fonts.css`:

```css
/* Open Sans Font - Local Version */
@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/open-sans/OpenSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/open-sans/OpenSans-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/open-sans/OpenSans-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/open-sans/OpenSans-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

#### Opção B: Usar fonte do sistema (Mais simples, mas resultado diferente)

Atualize `/src/styles/fonts.css`:

```css
/* System Font Fallback */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
```

E em `/src/imports/UiScript.tsx`, substitua todas as instâncias de:
```tsx
font-['Open_Sans:Regular',sans-serif]
```

Por:
```tsx
font-sans
```

### 3. Verificar package.json

Certifique-se de que todas as dependências estão instaladas:

```bash
npm install lucide-react
```

Se ainda tiver problemas, delete `node_modules` e reinstale:

```bash
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist Final

- [ ] Imagens colocadas em `/src/imports/assets/`
- [ ] Imports atualizados em `UiScript.tsx`
- [ ] Fonte configurada (local ou fallback)
- [ ] `npm install` executado
- [ ] Projeto rodando com `npm run dev`

## 🚀 Estrutura Esperada

```
/
├── public/
│   └── fonts/                    # (Opcional) Se usar fontes locais
│       └── open-sans/
│           ├── OpenSans-Regular.woff2
│           ├── OpenSans-Medium.woff2
│           ├── OpenSans-SemiBold.woff2
│           └── OpenSans-Bold.woff2
├── src/
│   ├── imports/
│   │   ├── assets/              # ADICIONAR ESTAS IMAGENS
│   │   │   ├── icon-image.png
│   │   │   └── button-icon.png
│   │   ├── UiScript.tsx         # ATUALIZAR IMPORTS
│   │   └── svg-bnrp5u04is.ts
│   └── styles/
│       └── fonts.css            # ATUALIZAR @font-face
└── package.json
```

## 🐛 Problemas Comuns

### Erro: "Cannot find module 'figma:asset/...'"
✅ **Solução:** Você esqueceu de atualizar os imports em `UiScript.tsx`

### Erro: "Failed to fetch font"
✅ **Solução:** Use a opção B (fonte do sistema) ou baixe as fontes localmente

### Imagens não aparecem
✅ **Solução:** Verifique se as imagens estão em `/src/imports/assets/` e não em `/public/`

### Build falha com erro de imports
✅ **Solução:** Certifique-se de usar imports relativos: `./assets/` e não `/assets/`

## 📝 Notas

- As imagens do Figma são apenas ícones decorativos pequenos no painel de script
- Você pode usar qualquer imagem PNG/JPG pequena (~15x15px)
- A aparência não mudará significativamente se você usar ícones diferentes
- O mais importante é que os imports funcionem corretamente

## 🆘 Suporte

Se ainda tiver problemas, verifique:
1. Console do navegador (F12) para erros específicos
2. Terminal onde o Vite está rodando
3. Certifique-se de que está usando Node.js 18+
