import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../root/globals.css";
import { cn } from "@/shared/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-pizza | client",
  description: "next-pizza client",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", nunito.className)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
