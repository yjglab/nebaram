import { Metadata, Viewport } from "next";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://nebaram.vercel.app`),
  title: "Nebaram",
  description: "새 바람을 실현할 첫 도약",
  openGraph: {
    // sns platform share data
    title: "Nebaram",
    description: "새 바람을 실현할 첫 도약",
    url: `https://nebaram.vercel.app`,
    siteName: "Nebaram",
    images: [
      {
        url: "/manifest/opengraph.jpg",
        alt: "thumbnail",
        width: 800,
        height: 400,
      },
    ],
  },
  icons: "/images/common/icon.png",
};

const RootLayout = ({ children }: Props) => {
  return children;
};

export default RootLayout;
