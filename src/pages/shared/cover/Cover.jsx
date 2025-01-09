import { Parallax, Background } from 'react-parallax';

const Cover = ({ bgImg, heading, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImg}
            bgImageAlt="the menu"
            strength={-300}
        >
            <div className="mb-12">
                <div
                    className="hero h-[800px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="px-20 md:px-56 md:py-20 py-12 bg-[#15151599]">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                            <p className="mb-5 text-xl">
                                {subHeading}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;