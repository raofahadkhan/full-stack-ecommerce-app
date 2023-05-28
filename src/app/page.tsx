import { client } from "../../sanity/lib/client";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]`);
	return res;
};

export default async function Home() {
	const data = await getProductData();
	// console.log(typeof data);
	return <></>;
}
