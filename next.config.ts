import type { NextConfig } from "next";
import * as webpack from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {},

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