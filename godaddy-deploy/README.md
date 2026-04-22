# GoDaddy Node.js PaaS — Deploy Reckon Computers

This folder is a ready-to-upload Node.js app that serves your React build on GoDaddy's Node.js PaaS (https://host.beta.godaddy.com/paas).

## One-time setup steps

### 1. Build the React site
On any machine that has Node.js + Yarn (or inside Emergent):
```bash
cd frontend
yarn install
yarn build
```
This creates `frontend/build/`.

### 2. Copy the build into this folder
```bash
cp -r frontend/build godaddy-deploy/build
```
After this, `godaddy-deploy/` should look like:
```
godaddy-deploy/
├── package.json
├── server.js
├── README.md
└── build/            <-- copied from frontend/build
    ├── index.html
    ├── static/
    └── ...
```

### 3. Zip the folder CONTENTS (not the outer folder)
Go inside `godaddy-deploy/`, select ALL its contents (package.json, server.js, build/, README.md), right-click → Compress/Send to → Zip.

**Important:** The zip must have `package.json` at its ROOT — not inside another folder.

On macOS/Linux terminal:
```bash
cd godaddy-deploy
zip -r ../reckon-godaddy.zip . -x "node_modules/*"
```

On Windows PowerShell:
```powershell
cd godaddy-deploy
Compress-Archive -Path * -DestinationPath ..\reckon-godaddy.zip
```

### 4. Upload the zip to GoDaddy PaaS
1. Open https://host.beta.godaddy.com/paas
2. Drop the `reckon-godaddy.zip` file into the upload area
3. GoDaddy will detect `package.json`, install `express` + `compression`, run `npm start`
4. Your site will be live at the GoDaddy-assigned URL

### 5. (Optional) Point your own domain
In GoDaddy PaaS settings → Domains → add your custom domain. Follow GoDaddy's DNS instructions.

## What if the contact form needs the backend?
This bundle is **static frontend only**. The contact form already has a WhatsApp fallback so it works without the backend. To host the FastAPI backend, you'd need a VPS (GoDaddy's Node.js PaaS does not run Python).

## Re-deploy after making changes
Every time you change the site:
1. `cd frontend && yarn build`
2. `cp -r frontend/build godaddy-deploy/build` (replace old build)
3. Re-zip and re-upload.
