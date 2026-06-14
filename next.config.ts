import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents the site being embedded in an iframe on another site (stops clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Stops browsers from guessing file types (prevents MIME sniffing attacks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controls how much referrer info is shared when clicking links
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Forces browsers to always use HTTPS for 2 years
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Disables access to camera, microphone and location — not needed on this site
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // Enables built-in browser XSS protection
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Content Security Policy — controls what is allowed to load on the page
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these security headers to every page on the site
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
