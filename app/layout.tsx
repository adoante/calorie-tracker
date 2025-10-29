import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({})

export const metadata: Metadata = {
	title: "Calorie Tracker",
	description: "Track your calories, stay on top of your goals, and see real progres",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased bg-zinc-50`}
			>
				{children}
			</body>
		</html>
	);
}
