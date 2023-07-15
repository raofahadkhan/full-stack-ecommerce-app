import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Navbar";
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
	title: "Product Detail",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
