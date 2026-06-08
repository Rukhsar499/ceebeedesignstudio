import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-giarek)"],
        body: ["var(--font-poppins)"],
      },
    },
  },
};

export default config;