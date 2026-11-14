import { Link } from "react-router-dom";
import Cards from "../Components/Decorations/cards";
import Coins from "../Components/Decorations/coins";
import Divider from "../Components/Decorations/divider";

export default function LoginScreen() {
    return (
        <main className="
            relative isolate flex min-h-dvh flex-col
            overflow-hidden bg-casino-crimson
            px-[clamp(1.5rem,8.8vw,3rem)]
        ">

            {/* Header */}
            <section className="relative z-10 flex flex-col items-center pt-12">
                <h3 className="font-sans text-body text-white">
                    Welcome to...
                </h3>

                <h1 className="font-display text-title text-casino-gold">
                    Lucky 22
                </h1>

                <h3 className="font-sans text-body text-white">
                    Place your bets. Test your luck.
                </h3>

                <div className="mt-2 w-full max-w-[260px]">
                    <Divider />
                </div>
            </section>

            {/* Login Form */}
            <section className="
                relative z-10 mx-auto mt-1
                w-full
            ">
                <form className="flex flex-col items-start gap-2">

                    <label htmlFor="username" className="
                        font-sans text-[clamp(1rem,4vw,1.25rem)]
                        text-white
                    ">
                        Username
                    </label>

                    <input
                        id="username"
                        type="text"
                        autoComplete="username"
                        className="
                            h-10 w-full rounded-xl
                            border border-casino-gold
                            bg-casino-white px-3
                            text-casino-black outline-none
                            focus:ring-2 focus:ring-casino-gold
                        "
                    />

                    <label htmlFor="password" className="
                        mt-2 font-sans text-[clamp(1rem,4vw,1.25rem)]
                        text-white
                    ">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        className="
                            h-10 w-full rounded-xl
                            border border-casino-gold
                            bg-casino-white px-3
                            text-casino-black outline-none
                            focus:ring-2 focus:ring-casino-gold
                        "
                    />

                    <p className="
                        mt-1 font-sans text-sm-body
                        text-white
                    ">
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-bold text-white hover:underline">
                            Sign Up
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="
                            mt-2 rounded-xl bg-casino-red
                            px-4 py-2 font-sans
                            text-[clamp(1rem,4vw,1.25rem)]
                            text-white transition hover:brightness-110
                        "
                    >
                        Login
                    </button>
                </form>
            </section>

            {/* Decorative Artwork */}
            <div className="
                pointer-events-none absolute inset-x-0 bottom-0
                z-0 h-[36svh] min-h-[200px] max-h-[430px]
            ">
                <div className="
                    absolute bottom-[20%] left-[0%]
                    h-auto w-[42%] max-w-[200px]
                ">
                    <Coins />
                </div>


                <div className="
                    absolute bottom-[-20%] right-[25%]
                    h-auto w-[42%] max-w-[200px]
                ">
                    <Cards />
                </div>
            </div>

        </main>
    );
}
