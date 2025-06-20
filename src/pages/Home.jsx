import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Tosti Buddy!</h1>
            <p className="text-lg mb-8">Your ultimate guide to the perfect toastie.</p>
            <Link to="/storage">
                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Let's COOK</span>
                </button>
            </Link>
        </div>
    )
}