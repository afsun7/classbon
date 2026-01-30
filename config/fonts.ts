import { Figtree } from "next/font/google";
import localFont from "next/font/local";

export const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const vazir = localFont({
  src: [
    {
      path: "../public/fonts/Vazir-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    { path: "../public/fonts/Vazir-Thin.woff", weight: "100", style: "normal" },
    {
      path: "../public/fonts/Vazir-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    { path: "../public/fonts/Vazir-Bold.woff", weight: "700", style: "normal" },
    {
      path: "../public/fonts/Vazir-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
