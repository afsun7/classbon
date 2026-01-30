import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import "./globals.css";
import { figtree, vazir } from "@/config/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${vazir.variable}`}>
      <body className=" grid grid-rows-[80px_1fr_auto] min-h-screen font-bold uppercase dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
