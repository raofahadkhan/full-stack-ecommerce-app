import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Navbar";
import Hero from "@/components/Hero_Section/Hero";
import Home_Products from "@/components/Home_Products/Home_Products";
import New_Release from "@/components/New_Release/New_Release";
import NewsLetter from "@/components/Newsletter/Newsletter";
import UniqueSection from "@/components/Unique_Section/Unique_Section";
import { IProduct } from "@/types/types";
import { client } from "../../sanity/lib/client";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]{
		name,
		price,
		_id,
		title,
		image,
		category -> {
			name
		}
	}`);
	return res;
};

export default async function Home() {
	const data: IProduct[] = await getProductData();

	return (
		<>
			<Header />
			<Hero />
			<New_Release data={data}/>
			<Home_Products data={data} />
			<UniqueSection />
			<NewsLetter />
			<Footer />
		</>
	);
}
