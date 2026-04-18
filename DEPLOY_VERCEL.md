# Deploy Reckon Computers to Vercel

Your earlier build failed because Vercel ran `ng build` (Angular CLI) —
but this project is **React (Create React App)**. Two files now fix this:

- `vercel.json` at the repo root (for monorepo style, where frontend/backend live together)
- `frontend/vercel.json` (used when you set Vercel's **Root Directory** to `frontend`)

Pick **one** of the two deployment methods below — both work.

---

## ✅ Method A — Set Vercel Root Directory to `frontend` (recommended)

1. Go to https://vercel.com → **Add New → Project**
2. Import your GitHub repo (e.g. `Aman3666/new`)
3. On the **Configure Project** screen:
   - **Framework Preset:** `Create React App`  (auto-detected)
   - **Root Directory:** click **Edit** → select `frontend`
   - **Build Command:** leave default (`yarn build`)
   - **Output Directory:** leave default (`build`)
   - **Install Command:** leave default (`yarn install`)
4. Click **Deploy**

This is the cleanest approach because Vercel only sees the React app.

---

## Method B — Keep Vercel's Root Directory at repo root

The `vercel.json` at the root of the repo handles everything:

```json
{
  "framework": "create-react-app",
  "buildCommand": "cd frontend && yarn install --frozen-lockfile && yarn build",
  "outputDirectory": "frontend/build"
}
```

Just import the repo in Vercel and click **Deploy** — it will follow the config.

---

## 🚑 If your current Vercel project still errors

The old project likely has `ng build` saved in its Build Command.
**In the Vercel dashboard:**

1. Open your project → **Settings → Build & Development Settings**
2. For each of these rows, click **Override** OFF (so Vercel uses `vercel.json` instead):
   - Build Command
   - Output Directory
   - Install Command
3. Or set them manually:
   - Build Command → `cd frontend && yarn install && yarn build`
   - Output Directory → `frontend/build`
   - Install Command → leave blank
4. Click **Save** → **Deployments → Redeploy**

---

## ✅ What to expect after a successful deploy

- URL: `https://<your-project>.vercel.app`
- All 6 sections work (Home, About, Partners, Services, Clients, Contact)
- Contact form opens WhatsApp with pre-filled message — no backend needed
- All brand logos (HP, Dell, Hikvision, Dahua, Quick Heal, etc.) render correctly

---

## Optional — add a custom domain

Vercel → Project → **Settings → Domains** → add `reckoncomputers.in` (or similar).
Vercel gives you the DNS records to point at your registrar.

---

## Troubleshooting

| Error | Fix |
| --- | --- |
| `ng: command not found` | You still have `ng build` in Build Command. Remove override (see above). |
| `yarn: command not found` | In Vercel Settings → General → **Package Manager**, choose `yarn`. |
| 404 on refresh | The `rewrites` block in `vercel.json` handles SPA routing. Should not happen. |
| Fonts / images not loading | Clear Vercel cache → Redeploy. |
