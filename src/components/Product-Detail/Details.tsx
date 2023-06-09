import React from "react";
import Image from "next/image";
import Homeproduct from "/public/images/homeproduct/1.jpg";
import { BsCart } from "react-icons/bs";

const Details = () => {
  return (
    <>
      <div className="flex sm:block md:flex lg:flex xl:flex gap-[34px]">
        <div className="sm:mb-[20px] md:mb-[unset] lg:mb-[unset] xl:mb-[unset]">
          <Image src={Homeproduct} width={250} height={250} alt="home" />
        </div>

        <div>
          <div>
            <h2 className="font-bold text-[#000] text-[20px]">
              Central Park West: A Crime Novel
            </h2>

            <p>
              by, <span>James Comey</span>
            </p>
          </div>

          <div className="flex items-center gap-[20px] mt-[30px]">
            <h3>Quantity:</h3>

            <div className="flex gap-3 items-center">
              <button className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">
                -
              </button>
              <p>1</p>
              <button className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-2xl font-light flex items-center justify-center">
                +
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-[40px]">
            <button className="text-xs prodsc:text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-2 subsc:w-[50%] navsc:w-auto navsc:px-4 py-[0.65rem] flex gap-2 items-center justify-center">
              <BsCart size={22} />
              <span className="text-[16px]">Add to Cart</span>
            </button>
            <span className="font-bold text-3xl leading-7 text-[#212121] tracking-widest">
              $195.00
            </span>
          </div>
        </div>
      </div>

      <div className="my-[80px]">
        <div className="border-b-2 border-[#000] pb-[10px]">
          <h3 className="text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] sm:text-[22px] mm:text-[25px] font-bold text-[#000]">
            Product Information
          </h3>
        </div>

        <div className="mt-[20px]">
          <div className="flex sm:block md:flex lg:flex xl:flex mt-10">
            <p className="sm:mb-[10px] md:mb-[unset] lg:mb-[unset] xl:mb-[unset] uppercase font-bold text-base text-[#666] leading-5 tracking-wider flex-1">
              About the author:
            </p>
            <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider flex-[2]">
              Since graduating from the College of William and Mary in 1982 and
              the University of Chicago Law School in 1985, James Comey has been
              a prosecutor, defense lawyer, general counsel, teacher, writer,
              and leader. He most recently served in the US government as the
              Director of the FBI. His best-selling book, A Higher Loyalty:
              Truth, Lies, and Leadership was published in 2018 and was made
              into a 2020 television limited series. His second book, Saving
              Justice: Truth, Transparency, and Trust, also a New York Times
              best-seller, was published in 2021. Central Park West is his first
              crime novel. --This text refers to the library edition.
            </p>
          </div>

          <div className="mt-10">
            <p className="uppercase font-bold text-base text-[#666] leading-5 tracking-wider mb-[20px]">
              Book Details
            </p>
            <div>
              <p className="font-bold text-base text-[#000] leading-[26px] text-justify tracking-wider mb-[10px]">
                In the thrilling first crime novel from the former director of
                the FBI, a murder investigation reveals deadly connections
                between high-ranking politicians and the mafia.
              </p>

              <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider mb-[10px]">
                The gripping crime fiction debut from former FBI director James
                Comey takes readers deep inside the world of lawyers and
                investigators working to solve a murder while navigating the
                treacherous currents of modern politics and the mob.
              </p>

              <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider mb-[10px]">
                When a years-long case against a powerful mobster finally cracks
                and an unimpeachable witness takes the stand, federal prosecutor
                Nora Carleton is looking forward to putting the defendant away
                for good. The mobster, though, has other plans. As the witness’s
                testimony concludes, a note is passed to the prosecution
                offering up information into the assassination of a disgraced
                former New York governor, murdered in his penthouse apartment
                just days before. It’s enough to blow the case wide open, and to
                send Nora into a high-stakes investigation of conspiracy,
                corruption, and danger.
              </p>

              <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider mb-[10px]">
                Drawing from the author’s decades in federal law enforcement,
                including his years in Manhattan as a mob prosecutor and later
                the chief federal prosecutor, Central Park West is a fast-paced
                legal thriller with an intriguing plot enriched by real-life
                details and experiences. That unique perspective gives the novel
                much of its allure, but it’s the unforgettable characters,
                shocking twists, and courtroom scenes as authentic as they are
                dramatic that will leave readers looking forward to more from
                this bold new talent in the genre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
