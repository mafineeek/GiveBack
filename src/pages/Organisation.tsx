import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";
import OrganisationView from "../components/OrganisationView.tsx";
import OrganisationText from "../components/OrganisationText.tsx";

function Organisation(){
    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen mt-4">
                <div className="w-2/3 h-max bg-neutral-light rounded-lg shadow-2xl flex" id="tutaj">
                    <div className="w-1/3 bg-primary p-4 flex flex-col items-center rounded-tl-xl rounded-bl-xl text-white">
                        <OrganisationView/>
                    </div>
                    <div className="w-2/3 p-4 rounded-lg">
                        <OrganisationText/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Organisation;