import {FaEnvelope, FaHouseUser} from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";

function OrganisationView() {
    return (
        <>
            <FaHouseUser className="text-white text-8xl mb-2"/>
            <h1>Caritas Częstochowa</h1>
            <h1 className="mt-4 text-xl">
                Adres:
                ul. Księdza Stansiława Staszica 5
                42-200 Częstochowa
                <a href="#"
                   className="mt-2 flex items-center justify-center rounded-md border-white border-2 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                    <FaMapMarkedAlt className={"mr-2"}/>
                    Jak dojechać?
                </a>
            </h1>
            <div className="mt-4">
                <a href="#"
                   className="mt-4 flex items-center justify-center rounded-md border-white border-2 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                    <FaEnvelope className={"mr-2"}/>
                    Wiadomość
                </a>
            </div>
        </>
    );
}
export default OrganisationView;
