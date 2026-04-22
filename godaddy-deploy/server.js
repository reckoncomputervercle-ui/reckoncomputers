/**
 * Tiny production server for GoDaddy Node.js PaaS.
 * Serves the React build/ folder + SPA fallback + security headers.
 */
const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8080;
const BUILD_DIR = path.join(__dirname, "build");

// Gzip responses
app.use(compression());

// Security headers (keeps your securityheaders.com grade at A)
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()"
  );
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
  );
  next();
});

// Serve static files with long cache for hashed assets
app.use(
  express.static(BUILD_DIR, {
    etag: true,
    lastModified: true,
    maxAge: "1y",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  })
);

// SPA fallback - every unknown route returns index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Reckon Computers site running on port ${PORT}`);
});
