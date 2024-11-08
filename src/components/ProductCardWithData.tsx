import React from "react";
import { FaEnvelope } from "react-icons/fa6";

const ProductCardWithData = ({ product }) => {
	const { image, name, category, transactionType, userName, userImage, rating } = product;

	return (
		<div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
			<a
				className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
				href="#"
			>
				<img
					className="object-cover w-full h-full"
					src={image}
					alt={`${name} image`}
				/>
				<span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  {transactionType.toUpperCase()}
              </span>
			</a>
			<div className="mt-4 px-5 pb-5">
				<a href="#">
					<h5 className="text-xl tracking-tight text-slate-900">
						{name}
					</h5>
				</a>
				<div className="mt-2 mb-5 flex items-center justify-between">
					<p className="flex items-center">
						<img
							className="h-8 w-8 rounded-full object-cover"
							src={"https://i.pravatar.cc/300"}
							alt={`${userName} profile`}
						/>
						<span className="ml-3 text-sm font-medium text-slate-900">
                          Lorem Ipsum
                      </span>
					</p>
					<div className="flex items-center">
						{Array.from({ length: 5 }).map((_, index) => (
							<svg
								key={index}
								aria-hidden="true"
								className={`h-5 w-5 ${index < rating ? 'text-yellow-300' : 'text-gray-300'}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						))}
						<span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                          {rating?.toFixed(1)}
                      </span>
					</div>
				</div>
				<a
					href="#"
					className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay"
				>
					<FaEnvelope className="mr-2" />
					Wiadomość
				</a>
			</div>
		</div>
	);
};

export default ProductCardWithData;
