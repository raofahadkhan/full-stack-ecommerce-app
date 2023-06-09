import { uniqueSection } from "@/data/data";
import { uniqueImgType, uniqueSectionType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

const UniqueSection = () => {
  const { uniqueImg, buttonText, buttonTextHref }: uniqueSectionType =
    uniqueSection;
  return (
    <div className="bg-[#b1bad4] py-[4rem] px-[8rem] xl:px-[8rem] lg:px-[8rem] md:px-[3rem] sm:px-[3rem]">
      <div className="flex justify-center gap-10 xl:flex lg:flex md:flex sm:block">
        {uniqueImg.map((item: uniqueImgType, index: number) => (
          <div
            key={index}
            className="hover:scale-110 transition-all ease-in duration-500 sm:mb-[20px] md:mb-[unset] lg:mb-[unset] xl::mb-[unset]"
          >
            <Link href="#">
              <Image
                src={item.uniqueImg}
                width={500}
                height={500}
                alt="unique1"
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-[60px] flex justify-center">
        <Link
          href={buttonTextHref}
          className="flex justify-center items-center gap-3 text-[18px] font-[700] text-[#fff] bg-[#212121] w-[35%] p-[1rem] sm:w-[100%] xl:w-[35%] lg:w-[35%] md:w-[35%]"
        >
          <BsCart2 size={22} /> {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default UniqueSection;
