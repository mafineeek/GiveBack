import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { FaEnvelope} from "react-icons/fa6";
import {FaHands} from "react-icons/fa";
import {Footer} from "../components/Footer";
import ProductCard from "../components/ProductCard.tsx";


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
