"use client";
import { sliderProductType } from "@/types/types";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/swiper.module.css";

const ProductSlider = ({ sliderData }: { sliderData: sliderProductType[] }) => {
	return (
		<div className="mx-auto max-w-[73rem] overflow-hidden px-10 pb-[50px] pt-[50px]">
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				className="mySwiper"
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
			>
				{sliderData.map((item: sliderProductType, index: number) => (
					<SwiperSlide key={index}>
						<div>
							<Image
								src={item.image}
								alt="bookOne"
								width={500}
								height={500}
								className="m-auto h-[346px] w-[212px] sm:h-[100%] sm:w-[100%] md:h-[346px] md:w-[212px] lg:h-[346px] lg:w-[212px] xl:h-[346px] xl:w-[212px]"
							/>

							<div className="mt-[8px] text-center">
								<h3 className="text-[16px] font-semibold text-[#212121]">
									{item.productTitle}
								</h3>

								<h4 className="text-[15px] font-semibold text-[#212121]">
									${item.price}
								</h4>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductSlider;
