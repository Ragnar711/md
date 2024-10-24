import Image from "next/image";

const About = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <header className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
                <div className="flex flex-col items-start justify-around bg-[#31464d] p-20 space-y-8">
                    <h1 className="text-[3rem] text-white flex flex-row items-center justify-between gap-5">
                        <Image
                            src="/logo.png"
                            alt="about"
                            width={80}
                            height={80}
                        />
                        MD Bâtiment Solutions
                    </h1>
                    <p className="text-white font-bold text-[5rem] leading-snug">
                        &quot;Transformez vos rêves en réalité avec MD Bâtiment
                        Solutions.&quot;
                    </p>
                    <a
                        href="#about"
                        className="bg-[#556e76] text-white px-8 py-4 text-3xl rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-[#2f5c6f] inline-block text-center"
                    >
                        Learn More
                    </a>
                </div>
            </header>
            <main
                className="h-screen w-full bg-[#eeeef0] flex flex-col items-start justify-around p-24"
                id="about"
            >
                <section className="flex flex-col space-y-8 w-1/2 text-[5rem] text-[#44575d] font-bold leading-tight p-4">
                    <hr className="border-[#44575d] border-4 w-1/2 mr-auto mb-10" />
                    Un partenaire pour toutes vos solutions de construction !
                </section>
                <section className="flex flex-col space-y-8 ml-auto text-left w-1/2 text-[2rem] text-[#44575d] p-4">
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
