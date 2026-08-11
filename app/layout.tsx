import type { Metadata } from "next";
import { Manrope, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const condensed = Roboto_Condensed({ variable: "--font-display", subsets: ["latin"] });

const title = "Fenis Díaz S.L. | Transportes y logística";
const description = "Soluciones de transporte por carretera y coordinación logística desde Córdoba.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joseangellopezdiaz.github.io/Fenis-Diaz-S.L./"),
  title,
  description,
  openGraph: { title, description, images: [{ url: "og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${manrope.variable} ${condensed.variable}`}>{children}</body></html>;
}
