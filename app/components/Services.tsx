import React from "react";
import Image from "next/image";

const Services: React.FC = () => {
    return (
        <section className="w-full h-screen">
            <div className="w-full h-full flex flex-col items-center justify-around bg-[#31464d] p-4">
                <header>
                    <h1
                        className="font-bold mb-4 text-center text-white w-1/2 mx-auto"
                        style={{ fontSize: "clamp(2rem, 2vw, 4rem)" }}
                    >
                        &quot;MD Bâtiment Solutions, votre partenaire pour tous
                        vos besoins en construction.&quot;
                    </h1>
                </header>
                <article
                    className="text-white mb-8 text-center w-2/3 mx-auto"
                    style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}
                >
                    Chez MD Bâtiment Solutions, nous proposons une gamme
                    complète de services pour tous vos besoins en construction.
                    Notre expertise inclut les études et la conception de
                    fluides, l&apos;électricité, le béton, l&apos;architecture
                    et le design d&apos;intérieur, ainsi que la gestion du
                    transport et de la logistique. Nous nous engageons à
                    garantir des résultats de haute qualité tout en respectant
                    vos délais et budgets. Que vous soyez un particulier ou une
                    entreprise, notre équipe est là pour transformer vos idées
                    en réalité.
                </article>
                <div
                    className="flex flex-row items-center justify-around space-x-4 font-bold w-full"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)" }}
                >
                    <div className="w-80 h-80 bg-[#eeeef0] flex flex-col items-center justify-center shadow-md">
                        <div className="relative w-2/3 h-2/3 mb-2">
                            <Image
                                src="/srv1.jpg"
                                alt="Architecture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-center text-[#002f69]">
                            ARCHITECTURE
                        </h2>
                    </div>
                    <div className="w-80 h-80 bg-[#eeeef0] flex flex-col items-center justify-center shadow-md">
                        <div className="relative w-2/3 h-2/3 mb-2">
                            <Image
                                src="/srv2.jpg"
                                alt="Béton"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-center text-[#002f69]">Béton</h2>
                    </div>
                    <div className="w-80 h-80 bg-[#eeeef0] flex flex-col items-center justify-center shadow-md">
                        <div className="relative w-2/3 h-2/3 mb-2">
                            <Image
                                src="/srv3.jpg"
                                alt="Études et Conception de Fluides"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-center text-[#002f69]">
                            ÉTUDES ET CONCEPTION DE FLUIDES
                        </h2>
                    </div>
                    <div className="w-80 h-80 bg-[#eeeef0] flex flex-col items-center justify-center shadow-md">
                        <div className="relative w-2/3 h-2/3 mb-2">
                            <Image
                                src="/srv4.jpg"
                                alt="Électricité"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-center text-[#002f69]">
                            ÉLECTRICITÉ
                        </h2>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-[#002f69] flex flex-row items-center justify-around px-10">
                <div className="w-1/3 h-[80%] flex flex-col items-start justify-center">
                    <h2
                        className="font-bold mb-4 text-white"
                        style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
                    >
                        Our Services
                    </h2>
                    <article
                        className="text-white mb-8 w-2/3"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                    >
                        Write a paragraph that talks about your construction
                        company here. Convince your prospective clients to
                        choose you and your team for their construction needs by
                        talking about your unique services, as well as your
                        commitment to getting the job done.
                    </article>
                </div>
                <div className="w-2/3 h-[75%] flex flex-row items-end justify-around">
                    <div className="h-[80%] w-1/4 flex flex-col items-start justify-around">
                        <div className="relative w-full h-full bg-gradient-to-b from-white via-white to-blue-600">
                            <div className="absolute top-[10%] bottom-[10%] left-0 w-full h-[80%]">
                                <Image
                                    src="/building1.jpg"
                                    alt="about"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <h2
                            className="font-bold mt-4 text-white text-center"
                            style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                        >
                            Residential Spaces
                        </h2>
                    </div>
                    <div className="h-[85%] w-1/4 flex flex-col items-start justify-around">
                        <div className="relative w-full h-full bg-gradient-to-b from-white via-white to-blue-600">
                            <div className="absolute top-[10%] bottom-[10%] left-0 w-full h-[80%]">
                                <Image
                                    src="/building2.jpg"
                                    alt="about"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <h2
                            className="font-bold mt-4 text-white text-center"
                            style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                        >
                            Commercial Buildings
                        </h2>
                    </div>
                    <div className="h-[90%] w-1/4 flex flex-col items-start justify-around">
                        <div className="relative w-full h-full bg-gradient-to-b from-white via-white to-blue-600">
                            <div className="absolute top-[10%] bottom-[10%] left-0 w-full h-[80%]">
                                <Image
                                    src="/building3.jpg"
                                    alt="about"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <h2
                            className="font-bold mt-4 text-white text-center"
                            style={{ fontSize: "clamp(2rem, 2vw, 3rem)" }}
                        >
                            Renovations & Upgrades
                        </h2>
                    </div>
                </div>
            </div>
            <section className="w-full h-screen flex flex-col items-center justify-center">
                <div className="w-full h-[10%] bg-white"></div>
                <div className="w-full h-[80%] flex">
                    <div className="flex-1 bg-[#0087ff] text-[#eeeef0] flex items-center justify-center">
                        <p
                            className="w-1/2 text-center"
                            style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
                        >
                            99% Projects completed
                        </p>
                    </div>
                    <div className="flex-1 bg-[#eeeef0] text-[#002f69] flex items-center justify-center">
                        <p
                            className="w-1/2 text-center"
                            style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
                        >
                            8+ Years in Operation
                        </p>
                    </div>
                    <div className="flex-1 bg-[#002f69] text-[#0087ff] flex items-center justify-center">
                        <p
                            className="w-1/2 text-center"
                            style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
                        >
                            3 Offices Nationwide
                        </p>
                    </div>
                </div>
                <div className="w-full h-[10%] bg-white"></div>
            </section>
            <section
                className="h-screen w-full bg-[#eeeef0] flex flex-col items-start justify-around p-8 md:p-24 overflow-hidden"
                id="about"
            >
                <section
                    className="h-[20%] flex flex-col space-y-4 md:space-y-8 w-full text-[#002f69] font-bold leading-tight p-4"
                    style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
                >
                    Client Testimonials
                </section>
                <section
                    className="flex flex-row items-start justify-around w-full h-[80%] text-[#44575d]"
                    style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                >
                    <div className="w-1/5 h-3/4 flex flex-col items-start justify-around">
                        <hr className="border-[#002f69] border-4 w-1/3 mr-auto mb-4 md:mb-10" />
                        <p className="text-[#002f69] text-xl">
                            Boost your product and service&apos;s credibility by
                            adding testimonials from your clients. People love
                            recommendations so feedback from others who&apos;ve
                            tried it is invaluable.
                        </p>
                        <p className="text-[#002f69] font-bold text-2xl">
                            Tristan Clousso, Shutter Club NY
                        </p>
                    </div>
                    <div className="w-1/5 h-3/4 flex flex-col items-start justify-around">
                        <hr className="border-[#002f69] border-4 w-1/3 mr-auto mb-4 md:mb-10" />
                        <p className="text-[#002f69] text-xl">
                            Boost your product and service&apos;s credibility by
                            adding testimonials from your clients. People love
                            recommendations so feedback from others who&apos;ve
                            tried it is invaluable.
                        </p>
                        <p className="text-[#002f69] font-bold text-2xl">
                            Shani Mensah, Vivarily
                        </p>
                    </div>
                    <div className="w-1/5 h-3/4 flex flex-col items-start justify-around">
                        <hr className="border-[#002f69] border-4 w-1/3 mr-auto mb-4 md:mb-10" />
                        <p className="text-[#002f69] text-xl">
                            Boost your product and service&apos;s credibility by
                            adding testimonials from your clients. People love
                            recommendations so feedback from others who&apos;ve
                            tried it is invaluable.
                        </p>
                        <p className="text-[#002f69] font-bold text-2xl">
                            Paisley Finwood
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Services;
