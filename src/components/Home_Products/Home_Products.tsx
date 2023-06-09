import React from "react";

import { homeProducts } from "@/data/data";
import { homeProductsType } from "@/types/types";
import ProductSlider from "./Product_Slider";

const HomeProducts = () => {
  const { title, subTitle, sliderProduct }: homeProductsType = homeProducts;
  return (
    <div className="max-w-[73rem] mx-auto mt-[50px] px-10 overflow-hidden">
      <div className="text-center flex flex-col">
        <h4 className="text-[#0062f5] text-[16px] font-bold mb-[15px]">
          {title}
        </h4>
        <h2 className="text-[#212121] font-bold text-[32px]">{subTitle}</h2>
      </div>

      <ProductSlider sliderData={sliderProduct} />
    </div>
  );
};

export default HomeProducts;
