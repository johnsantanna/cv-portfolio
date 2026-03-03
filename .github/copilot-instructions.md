# Copilot Instructions

## ⚠️ PRIORIDADE ZERO — Regras obrigatórias antes de qualquer ação

1. **Nunca deduza intenções ambíguas.** Se a solicitação não estiver 100% clara, pergunte antes de agir.

2. **Sempre informe antes de alterar** quais arquivos e métodos serão modificados, e aguarde confirmação do usuário.

---

## 🏗️ Arquitetura do Projeto

Monorepo com duas pastas:
- **`backend/`** — API .NET 8 (C#)
- **`frontend/`** — SPA React + TypeScript + Vite

---

## 📊 Fonte dos Dados (CRÍTICO)

- Os dados do currículo são mantidos **exclusivamente** em `backend/Services/CvService.cs`.
- O arquivo `frontend/public/data/cv.json` é **gerado automaticamente** pelo backend — **NÃO editar manualmente**.
- Para alterar dados do CV → editar **somente** `CvService.cs`.
- Para regenerar o JSON local: `cd backend && dotnet run -- --export-json --output ../frontend/public/data/cv.json`

---

## 🌐 Dev vs Produção (CRÍTICO)

### Desenvolvimento (local)
- Frontend: `npm run dev` (Vite com proxy `/api` → backend local)
- Backend: `dotnet run` (API REST em `/api/cv`)
- `useCv.ts` usa `import.meta.env.DEV` → busca de `/api/cv`

### Produção (GitHub Pages — hospedagem estática)
- **NÃO existe backend em produção.**
- `useCv.ts` detecta produção → busca de `{BASE_URL}data/cv.json` (arquivo estático)
- **Nunca** criar chamadas a `/api/*` sem fallback estático para produção.

---

## 🚀 Deploy (GitHub Actions)

O workflow `.github/workflows/deploy.yml`:
1. Checkout do código
2. Backend .NET gera `cv.json` com `dotnet run -- --export-json`
3. Frontend: `npm ci` + `npm run build`
4. Deploy de `frontend/dist` para GitHub Pages

**⚠️ NUNCA deletar `deploy.yml`** — é essencial para o deploy automático.

---

## 📦 Regras para Commits

- Verificar `git status` antes de `git add -A` para não remover arquivos importantes acidentalmente.
- Após push, o GitHub Actions roda automaticamente.

---

## ⚙️ Configurações Importantes

- `vite.config.ts` → `base: '/cv-portfolio/'` (caminho GitHub Pages)
- `vite.config.ts` → proxy `/api` para dev
- `frontend/src/hooks/useCv.ts` → lógica dev vs prod

---

## 🔧 Comandos Úteis

```bash
# Backend
cd backend
dotnet run                                                    # API local
dotnet run -- --export-json --output ../frontend/public/data/cv.json  # Gerar JSON

# Frontend
cd frontend
npm run dev     # Dev server
npm run build   # Build produção
```
