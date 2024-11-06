import React from "react";
import {FaEnvelope} from "react-icons/fa6";

    const ProfileProductCard = () => {
        return (
            <div
                className="relative m-10 flex w-4/5 w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-auto overflow-hidden rounded-xl" href="#">
                    <img className="object-cover"
                         src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                         alt="product image"/>
                    <span
                        className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">WYMIENIĘ</span>
                </a>
                <div className="mt-4 px-5 pb-5 mb-4">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                    </a>
                    <div className="mt-4">
                    <a href="#"
                       className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                        <FaEnvelope className={"mr-2"}/>
                        Wiadomość</a
                    >
                    </div>
                </div>
            </div>

        )
    }

    export default ProfileProductCard;
