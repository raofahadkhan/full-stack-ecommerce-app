import { footerData } from "@/data/data";
import { contactType, footerDataType, productType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const {
    getConnected,
    logo,
    description,
    product,
    contact,
    copyright,
    kitaabText,
    kitaabLink,
  }: footerDataType = footerData;

  return (
    <footer className="bg-neutral-100 text-center text-[#212121] dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
        <div className="mr-12 hidden lg:block">
          <span>{getConnected}</span>
        </div>

        <div className="flex justify-center">
          <Link href="#!" className="mr-6 text-[#212121] dark:text-neutral-200">
            <BsFacebook />
          </Link>
          <Link href="#!" className="mr-6 text-[#212121] dark:text-neutral-200">
            <BsTwitter />
          </Link>
          <Link href="#!" className="text-[#212121] dark:text-neutral-200">
            <BsGithub />
          </Link>
        </div>
      </div>

      <div className="mx-[8rem] py-10 text-center md:text-left sm:mx-[6rem] md:mx-[8rem] lg:mx-[8rem] xl:mx-[8rem]">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div>
            <Image
              src={logo}
              width={500}
              height={500}
              className="w-[75%] sm:w-[100%] lg:w-[75%] md:w-[75%] xl:w-[75%] mb-[30px]"
              alt="logo"
            />
            <p>{description}</p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {product.map((item: productType, index: number) => (
              <p key={index} className="mb-4">
                <Link
                  href={item.linkHref}
                  className="text-[#212121] dark:text-neutral-200"
                >
                  {item.linkText}
                </Link>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contact.map((item: contactType, index: number) => (
              <p
                key={index}
                className="mb-4 flex items-center gap-2 justify-center md:justify-start"
              >
                <Image
                  src={item.textImg}
                  width={20}
                  height={20}
                  alt="contact svg"
                />
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>{copyright} </span>
        <Link
          className="font-bold text-[#081190] dark:text-[#081190]"
          href={kitaabLink}
        >
          {kitaabText}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
