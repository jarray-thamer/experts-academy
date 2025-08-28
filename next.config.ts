import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-require-imports": "off",
  },
};

export default nextConfig;
