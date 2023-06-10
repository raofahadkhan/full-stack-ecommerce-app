import { Image as IImage } from "sanity";

// Navbar Type
export type linksType = {
	label: string;
	href: string;
};

export type navbarDataType = {
	logo: string;
	links: linksType[];
};

// Footer Type
export type productType = {
	linkText: string;
	linkHref: string;
};

export type contactType = {
	text: string;
	textImg: string;
};

export type footerDataType = {
	getConnected: String;
	logo: string;
	description: string;
	product: productType[];
	contact: contactType[];
	copyright: string;
	kitaabText: string;
	kitaabLink: string;
};

// Hero Section Type
export type companiesLogoType = {
	image: string;
};

export type heroSectionType = {
	saleText: string;
	title: string;
	subtitle: string;
	buttonText: string;
	buttonTextHref: string;
	companiesLogo: companiesLogoType[];
	bigImage: string;
};

// New Release Type
export type showcaseType = {
	image: string;
};

export type newReleasesType = {
	mainText: string;
	mainText2: string;
	mainText3: string;
	showcase: showcaseType[];
};

// Home Products Type
export type sliderProductType = {
	image: string;
	productTitle: string;
	price: string;
};

export type homeProductsType = {
	title: string;
	subTitle: string;
	sliderProduct: sliderProductType[];
};

// Unique Section Type
export type uniqueImgType = {
	uniqueImg: string;
};
export type uniqueSectionType = {
	uniqueImg: uniqueImgType[];
	buttonText: string;
	buttonTextHref: string;
};

// Newsletter Section Type
export type newsletterDataType = {
	title: string;
	subTitle: string;
	buttonText: string;
};

// Product Array Type from Sanity
export type IProduct = {
	name: string;
	_id: string;
	slug: string;
	description: string;
	price: number;
	image: IImage;
	category: {
		name: string;
	};
};
