import React from 'react';
import Marquee from 'react-fast-marquee';

import Bayer from "../assets/Client/Bayer.png";
import Bel from "../assets/Client/Bel.png";
import Biomedex from "../assets/Client/Biomedex.png";
import Boehringer from "../assets/Client/Boehringer.png";
import Bunge from "../assets/Client/Bunge.png";
import Givaudan from "../assets/Client/Givaudan.png";
import Illumina from "../assets/Client/Illumina.png";
import Loreal from "../assets/Client/Loreal.png";
import Mars from "../assets/Client/Mars.png";
import Mithra from "../assets/Client/Mithra.png";
import Nestle from "../assets/Client/Nestle.png";
import Orion from "../assets/Client/Orion.png";
import Roche from "../assets/Client/Roche.png";
import Siemens from "../assets/Client/Siemens.png";
import Thermofisher from "../assets/Client/Thermofishers.png";
import Valio from "../assets/Client/Valio.png";
import Weleda from "../assets/Client/Weleda.png";
import Zeal from "../assets/Client/Zeal.png";

const logos = [
    Bayer,
    Bel,
    Biomedex,
    Boehringer,
    Bunge,
    Givaudan,
    Illumina,
    Loreal,
    Mars,
    Mithra,
    Nestle,
    Orion,
    Roche,
    Siemens,
    Thermofisher,
    Valio,
    Weleda,
    Zeal
];

const LogoCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden items-center">
            <div className='flex flex-row items-center justify-center'>
                <h2 className="text-4xl font-bold text-darkBlue mb-12 mr-2">Our </h2><h2 className='text-4xl font-bold mb-12 text-darkBlue'>Clients</h2>
            </div>
            <div className="flex flex-nowrap w-full overflow-hidden pb-6">
                <Marquee
                    gradient={false}
                    speed={90}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}>
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-32 h-32 mx-4 flex items-center justify-center backdrop-blur-md shadow-md rounded-lg">
                            <img src={logo} alt={`Logo ${index}`} className="w-24 h-24 object-contain" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default LogoCarousel;
