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
