import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { FaEnvelope} from "react-icons/fa6";
import {FaHands} from "react-icons/fa";
import {Footer} from "../components/Footer";

const ProductCard = () => {
	return (
		<div
			className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
			<a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
				<img className="object-cover"
						 src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						 alt="product image"/>
				<span
					className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">WYMIENIĘ</span>
			</a>
			<div className="mt-4 px-5 pb-5">
				<a href="#">
					<h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
				</a>
				<div className="mt-2 mb-5 flex items-center justify-between">
					<p className="flex items-center">
						<img className="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/300" alt=""/>
						<span className="ml-3 text-sm font-medium text-slate-900">Kasia</span>
					</p>
					<div className="flex items-center">
						<svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
					</div>
				</div>
				<a href="#"
					 className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
					<FaEnvelope className={"mr-2"}/>
					Wiadomość</a
				>
			</div>
		</div>

	)
}

const JoinGiveBack = () => {
	return (
		<div
			className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
			<a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
				<FaHands className="m-auto text-[10rem] text-gray-400"/>
			</a>
				<h1 className="text-2xl text-center">Nie czekaj</h1>
				<span className="text-xl text-center underline decoration-primary decoration-4">Dołącz do GiveBack</span>
			<div className="mt-4 px-5 pb-5">
				<a href="#"
					 className="mt-7 flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
					<FaEnvelope className={"mr-2"}/>
					Dołącz</a
				>
			</div>
		</div>

	)
}


export const Home = () => {
	return (
		<>
			<Navbar/>
			<Banner/>
			<div className="max-w-7xl w-full mx-auto mt-10">
				<h1 className="text-3xl">Oni już dołączyli...</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
					<ProductCard/>
					<ProductCard/>
					<ProductCard/>
					<ProductCard/>
					<ProductCard/>
					<JoinGiveBack/>
				</div>
			</div>
			<Footer/>
		</>
	)
}
