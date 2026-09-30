import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // El layout raíz vive en app/[lang], así que el 404 de URLs sin ruta se define en app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
