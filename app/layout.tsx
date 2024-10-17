import "./globals.css";
import { Inter } from "next/font/google";
import TopNav from "@/components/ui/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medical chatbot",
  description: "The medical chatbot with llama-7b and pinecone rag application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
