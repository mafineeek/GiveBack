import React from 'react'
import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";
import {FaCircleUser, FaStar, FaRegStar, FaStarHalfStroke, FaEnvelope} from "react-icons/fa6";
import ProfileProductCard from "../components/ProfileProductCard.tsx";

function Profile() {
    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen mt-4">
                <div className="w-2/3 h-max bg-neutral-light rounded-lg shadow-2xl flex" id="tutaj">
                    <div className="w-1/3 bg-primary p-4 flex flex-col items-center rounded-tl-xl rounded-bl-xl text-white">
                        <FaCircleUser className="text-white text-8xl mb-2"/>
                        <h1>Jan Kowalski</h1>
                        <h1 className="mt-4 text-xl">
                            Zdecydowałem się pomagać potrzebującym i oddawać
                            swoje nieużywane ubrania, bo widziałem, jak
                            wielu ludzi w mojej społeczności zmaga się z
                            brakiem podstawowych rzeczy. Kieruje mną empatia
                            i chęć niesienia pomocy – wierzę, że takie
                            gesty mogą poprawić komuś codzienność.
                            Dzieląc się tym, czego już nie potrzebuję,
                            mam nadzieję uczynić świat choć trochę lepszym miejscem.
                        </h1>
                        <h1 className="mt-4 text-xl">Ocena użytkownika:</h1>
                        <div className="flex flex-row text-2xl">
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                            <FaStarHalfStroke className="text-yellow-400"/>
                            <FaRegStar className="text-yellow-400"/>
                        </div>
                        <div className="mt-4">
                        <a href="#"
                           className="flex items-center justify-center rounded-md border-white border-2 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                            <FaEnvelope className={"mr-2"}/>
                            Wiadomość
                        </a>
                        </div>
                    </div>
                    <div className="w-2/3 p-4 rounded-lg">
                        <h1 className="text-center text-primary text-4xl font-bold">Ogłoszenia</h1>
                        <div className="grid grid-cols-2 mt-4">
                            <ProfileProductCard/>
                            <ProfileProductCard/>
                            <ProfileProductCard/>
                            <ProfileProductCard/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Profile;
