import "./globals.css";
import Wrapper from "@/components/wrapper/Wrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Internshala",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning>
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	);
}
