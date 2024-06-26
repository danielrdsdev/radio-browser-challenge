import { StationsProvider } from "@/components/providers/favorite-stations";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Radio Browser",
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
				<StationsProvider>
					<audio id="audio" className="sr-only">
						<track kind="captions" src="captions.vtt" label="English" />
					</audio>
					{children}
				</StationsProvider>
			</body>
		</html>
	);
}
