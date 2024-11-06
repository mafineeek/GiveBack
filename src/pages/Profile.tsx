import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";
import ProfileProductCard from "../components/ProfileProductCard.tsx";
import ProfileViev from "../components/ProfileViev.tsx";

function Profile() {
    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen mt-4">
                <div className="w-2/3 h-max bg-neutral-light rounded-lg shadow-2xl flex" id="tutaj">
                    <div className="w-1/3 bg-primary p-4 flex flex-col items-center rounded-tl-xl rounded-bl-xl text-white">
                       <ProfileViev/>
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
