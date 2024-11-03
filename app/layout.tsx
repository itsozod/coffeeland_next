import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderLayout from "@/src/widgets/layout/header/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import ContentLayout from "@/src/widgets/layout/Content/ContentLayout";
import Providers from "./providers/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <AntdRegistry>
            <Layout style={{ minHeight: "100vh" }}>
              <HeaderLayout />
              <ContentLayout>{children}</ContentLayout>
            </Layout>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
