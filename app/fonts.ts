import localFont from "next/font/local";

export const giarek = localFont({
  src: "../public/fonts/Giarek-DemoVersion-Regular.ttf",
  variable: "--font-giarek",
});

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    
  ],
  variable: "--font-poppins",
});