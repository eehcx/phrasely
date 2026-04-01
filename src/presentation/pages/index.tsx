
import { NavigationMenuHome } from "@/presentation/components/common/navbar";
import Spline from '@splinetool/react-spline';
import { Footer } from "@/presentation/components/common/footer";
import { HowItWorks, GameShowcase, Features, CTA } from "@/presentation/components/home";

export const Index = () => {
    return (
        <div>
            <header className="relative w-full h-screen bg-[#F35F31]">
                <nav className="bg-[#F35F31]">
                    <NavigationMenuHome />
                </nav>
                <Spline scene="https://prod.spline.design/W8y-47bgfJxBI9Kj/scene.splinecode" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center space-y-4">
                        <h1 className="mx-auto max-w-2xl text-balance text-white text-6xl">
                            Easily create your educational resources.
                        </h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6 ">
                            <a
                                href="/auth/signup"
                                className="rounded-full bg-[#433252] border border-[#594668] px-4 py-2 text-sm font-semibold text-gray-100 shadow-lg hover:bg-[#594668]"
                            >
                                Create session
                            </a>
                            <a href="/console" className="text-base font-semibold text-white">
                                Go to console <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="bg-[#ffa872]">
                <div className="p-6">
                    <HowItWorks />
                </div>
                <GameShowcase />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};
