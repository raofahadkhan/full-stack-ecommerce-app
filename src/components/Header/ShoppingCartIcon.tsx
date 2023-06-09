import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

const ShoppingCartIcon = () => {
	return (
		<>
			<div>
				<Link
					href="/cart"
					className="
            relative
            flex
            rounded-[50%]
            bg-[#f1f1f1]
            p-[12px]
            transition-transform
            duration-[.4s]
            ease-in
         "
				>
					<BsCart2 size={22} />
					<span
						className="
              absolute
              right-[5px]
              top-0
              h-[18px]
              w-[18px]
              rounded-[50%]
              bg-[#f02d34]
              text-center
              text-[12px]
              font-semibold
              text-[#eee]
              "
					>
						0
					</span>
				</Link>
			</div>
		</>
	);
};

export default ShoppingCartIcon;
