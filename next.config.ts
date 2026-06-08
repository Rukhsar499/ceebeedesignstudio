import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // 1. Silence the error by letting Next.js know you recognize Turbopack is running
  turbopack: {},

  // 2. Keep this block active in case you drop back to Webpack builds
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        })
      );
    }
    return config;
  },
};

export default nextConfig;