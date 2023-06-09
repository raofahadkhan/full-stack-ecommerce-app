"use client";
import { navbarData } from "@/data/data";
import { linksType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Header = () => {
	const { logo, links }: any = navbarData;
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		console.log("Hello", menuOpen);
		setMenuOpen(!menuOpen);
	};

	return (
		<header>
			<div className="mx-auto flex max-w-[73rem] items-center justify-between px-10">
				<div className="py-10">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							className="h-[25px] w-[140px]"
							width={500}
							height={500}
						/>
					</Link>
				</div>

				<div
					className={`${
						menuOpen ? "flex flex-col" : "hidden md:flex"
					} gap-[2rem] md:flex lg:gap-[3rem] xl:gap-[3rem]`}
				>
					{links.map((item: linksType, index: number) => (
						<Link
							key={index}
							href={item.href}
							className="text-[16px] font-medium"
						>
							{item.label}
						</Link>
					))}
				</div>

				<div className="flex items-center">
					<div className="cursor-pointer md:hidden" onClick={toggleMenu}>
						<FaBars className="text-[24px]" />
					</div>

					<div
						className={`${
							menuOpen ? "flex" : "hidden gap-[30px] md:flex"
						} ml-4 items-center md:ml-0`}
					>
						<div className="flex w-[100%] items-center rounded-[5px] border-[1px] border-solid border-[#e4e5eb] px-[5px] py-[0px]">
							<CiSearch />
							<input
								type="text"
								placeholder="What you're looking for"
								className="w-full px-[5px] py-[5px] text-[16px] focus:outline-none"
							/>
						</div>

						<ShoppingCartIcon />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
