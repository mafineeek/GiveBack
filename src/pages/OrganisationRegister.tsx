import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";

function OrganisationRegister() {
    return (
        <>
            <Navbar/>
            <div className="bg-neutral-light p-24">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/"
                       className="mb-4 text-3xl font-extrabold text-primary-dark hover:text-primary transition duration-300">
                        GiveBack
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Zarejestruj Organizację
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="OrganizationName" className="block mb-2 text-sm font-medium text-gray-900">
                                        Nazwa Organizacji
                                    </label>
                                    <input
                                        type="text"
                                        name="OrganizationName"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="telep" className="block mb-2 text-sm font-medium text-gray-900">
                                        Telefon kontaktowy
                                    </label>
                                    <input
                                        type="tel"
                                        name="telep"
                                        id="tel"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="emailp" className="block mb-2 text-sm font-medium text-gray-900">
                                       Email Kontaktowy
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
                                    <label htmlFor="Street" className="block mb-2 text-sm font-medium text-gray-900">
                                        Ulica
                                    </label>
                                    <input
                                        type="text"
                                        name="Street"
                                        id="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="City"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Miasto
                                    </label>
                                    <input
                                        type="text"
                                        name="City"
                                        id="confirm-password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="wojewodztwo"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Województwo
                                    </label>
                                    <select name="wojewodztwo" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                                        <option value="dolnoslaskie">Dolnośląskie</option>
                                        <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
                                        <option value="lubelskie">Lubelskie</option>
                                        <option value="lubuskie">Lubuskie</option>
                                        <option value="lodzkie">Łódzkie</option>
                                        <option value="malopolskie">Małopolskie</option>
                                        <option value="mazowieckie">Mazowieckie</option>
                                        <option value="opolskie">Opolskie</option>
                                        <option value="podkarpackie">Podkarpackie</option>
                                        <option value="podlaskie">Podlaskie</option>
                                        <option value="pomorskie">Pomorskie</option>
                                        <option value="slaskie">Śląskie</option>
                                        <option value="swietokrzyskie">Świętokrzyskie</option>
                                        <option value="warminsko-mazurskie">Warmińsko-Mazurskie</option>
                                        <option value="wielkopolskie">Wielkopolskie</option>
                                        <option value="zachodniopomorskie">Zachodniopomorskie</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900">
                                        Email opiekuna
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="confirm-password"
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
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500">
                                            Akceptuję{' '}
                                            <a className="font-medium text-primary-600 hover:underline" href="#">
                                                Regulamin
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center rounded-md border-primary border-2 px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay"
                                >
                                    Zarejestruj
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

export default OrganisationRegister;
