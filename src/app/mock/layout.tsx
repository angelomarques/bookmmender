import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mock Designs | Bookmmender",
  description: "New design mocks for the book recommendation quiz and results.",
};

export default function MockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --primary: #0f49bd;
          --background-light: #f6f6f8;
          --background-dark: #101622;
        }
      `}} />
      <div className="bg-[#f6f6f8] dark:bg-[#101622] min-h-screen">
        {children}
      </div>
    </div>
  );
}
