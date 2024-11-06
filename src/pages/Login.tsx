import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";

function Login() {
    return (
        <>
            <Navbar/>
            <div className="bg-neutral-light">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/"
                       className="mb-4 text-3xl font-extrabold text-primary-dark hover:text-primary transition duration-300">
                        GiveBack
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
                                Zaloguj się
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="emailp" className="block mb-2 text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="emailp"
                                        id="tel"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="passwd"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Hasło
                                    </label>
                                    <input
                                        type="password"
                                        name="passwd"
                                        id="confirm-password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center rounded-md border-primary border-2 px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay"
                                >
                                    Zaloguj
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login;
