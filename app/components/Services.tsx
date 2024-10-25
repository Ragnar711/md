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
            <div className="w-full h-full bg-[#002f69] flex flex-row items-center justify-around">
                <div className="w-1/4 h-[70%] flex flex-col items-start justify-around">
                    <h2
                        className="font-bold mb-4 text-white"
                        style={{ fontSize: "clamp(2rem, 2vw, 4rem)" }}
                    >
                        Our Services
                    </h2>
                    <article
                        className="text-white mb-8"
                        style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}
                    >
                        Write a paragraph that talks about your construction
                        company here. Convince your prospective clients to
                        choose you and your team for their construction needs by
                        talking about your unique services, as well as your
                        commitment to getting the job done.
                    </article>
                </div>
                <div className="w-3/4 h-[70%] flex flex-row items-center justify-around"></div>
            </div>
        </section>
    );
};

export default Services;
