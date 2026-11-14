import { Link } from "react-router-dom";
import Cards from "../Components/Decorations/cards";
import Coins from "../Components/Decorations/coins";
import Divider from "../Components/Decorations/divider";

export default function SignupScreen() {
    return (
        <main className="relative isolate flex min-h-dvh flex-col overflow-x-hidden bg-casino-crimson px-6 pb-[clamp(220px,30svh,300px)]">

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

            {/* Signup Form */}
            <section className="relative z-10 mt-4 w-full px-2">
                <form className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full flex-row gap-3">
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <label className="font-sans text-sm-body text-white" htmlFor="first-name">
                                First Name
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="h-10 w-full rounded-xl border border-casino-gold bg-casino-white px-3 text-casino-black outline-none focus:ring-2 focus:ring-casino-gold"
                            />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <label className="font-sans text-sm-body text-white" htmlFor="last-name">
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="h-10 w-full rounded-xl border border-casino-gold bg-casino-white px-3 text-casino-black outline-none focus:ring-2 focus:ring-casino-gold"
                            />
                        </div>
                    </div>

                    <label htmlFor="username" className="
                        font-sans text-sm-body text-white">
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
                        mt-2 font-sans text-sm-body
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

                    {/* Register Link */}
                    <p className="
                        mt-1 font-sans text-sm-body
                        text-white
                    ">
                        Already have an account?{" "}
                        <Link to="/login" className="font-bold text-white hover:underline">
                            Login
                        </Link>
                    </p>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="mt-4 rounded-xl bg-casino-red px-5 py-2.5 font-sans text-body text-white transition hover:brightness-110"
                    >
                        Sign Up
                    </button>
                </form>
            </section>

            {/* Decorative Artwork */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[clamp(180px,25svh,280px)]">
                <div className="absolute bottom-[15%] left-0 w-[35%] max-w-[160px]">
                    <Coins />
                </div>

                <div className="absolute bottom-[-15%] right-[20%] w-[35%] max-w-[160px]">
                    <Cards />
                </div>
            </div>
        </main>
    );
}
