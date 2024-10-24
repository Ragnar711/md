import Image from "next/image";

const About = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <header className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
                <div className="relative w-full h-full">
                    <Image
                        src="/bg.jpg"
                        alt="about"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                </div>
                <div className="flex flex-col items-start justify-around bg-[#31464d] p-8 md:p-20 space-y-4 md:space-y-8 w-full">
                    <h1
                        className="text-white flex flex-row items-center gap-5 w-full"
                        style={{ fontSize: "clamp(2rem, 2vw, 4rem)" }}
                    >
                        <Image
                            src="/logo.png"
                            alt="about"
                            width={60}
                            height={60}
                            className="md:w-20 md:h-20"
                        />
                        MD Bâtiment Solutions
                    </h1>
                    <p
                        className="text-white font-bold leading-snug w-full"
                        style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }}
                    >
                        &quot;Transformez vos rêves en réalité avec MD Bâtiment
                        Solutions.&quot;
                    </p>
                    <a
                        href="#about"
                        className="bg-[#556e76] text-white px-4 py-2 md:px-8 md:py-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-[#2f5c6f] inline-block text-center w-1/2"
                        style={{ fontSize: "clamp(1rem, 1.5vw, 2rem)" }}
                    >
                        Learn More
                    </a>
                </div>
            </header>
            <main
                className="min-h-screen w-full bg-[#eeeef0] flex flex-col items-start justify-around p-8 md:p-24 overflow-hidden"
                id="about"
            >
                <section
                    className="flex flex-col space-y-4 md:space-y-8 w-full md:w-2/3 text-[#44575d] font-bold leading-tight p-4"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                >
                    <hr className="border-[#44575d] border-4 w-1/2 mr-auto mb-4 md:mb-10" />
                    Un partenaire pour toutes vos solutions de construction !
                </section>
                <section
                    className="flex flex-col space-y-4 md:space-y-8 ml-auto text-left w-full md:w-1/2 text-[#44575d] p-4"
                    style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                >
                    MD Bâtiment Solutions gère vos projets de construction de la
                    conception à la réalisation. Notre équipe dédiée garantit
                    des résultats de haute qualité, de l&apos;innovation et un
                    engagement envers les délais.
                </section>
            </main>
        </div>
    );
};

export default About;
