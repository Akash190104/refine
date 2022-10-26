import React, { useRef } from "react";
import Link from "@docusaurus/Link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    BusinessLogic01,
    BusinessLogic02,
    BusinessLogic04,
    BusinessLogic03,
    BackendIcons,
    GraySocialIcons,
    SmallSocialIcons,
    ColoredSocialIcons,
} from "../icons";
import { CountingNumber } from "../counting-number";
import { useTWBreakpoints } from "../../../hooks/use-tw-breakpoints";
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { useGithubContext } from "../../../context/GithubContext";
import SpotLight from "./spot-light";
import OnBackend from "./on-backend";
import OnWorkflow from "./on-workflow";

export const SectionNoConstraints: React.FC = () => {
    const { starCount } = useGithubContext();

    const ref = React.useRef<HTMLDivElement>(null);
    const sliderViewportRef = React.useRef<HTMLDivElement>(null);

    const { sm, md, lg, xl } = useTWBreakpoints();

    const [currentSlide, setCurrentSlide] = React.useState(1);

    const businessLogicAnimationOptions = useRef({
        animate: {
            rotateX: ["5deg", "10deg"],
            rotateY: ["20deg", "25deg"],
        },
        transition: {
            yoyo: Infinity,
            ease: "easeInOut",
            duration: 3,
            delay: 0,
        },
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: scrollYInScreenProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const slideX = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
        ["0%", "0%", "-100%", "-200%", "-300%", "-500%"],
    );

    const slide01ScreenProgress = useTransform<number, number>(
        [scrollYInScreenProgress, scrollYProgress],
        ([i, s]) => {
            return Math.max(i - s * 5, 0);
        },
    );

    const slideScreenText1Progress = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5],
        [1, 0, 0],
    );

    const slideScreenText2Progress = useTransform(
        scrollYProgress,
        [0, 1 / 5],
        [0, 1],
    );

    const slideScreenImageCustomUIProgress = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5],
        [1, 0, 0],
    );

    const slideScreen01Y = useTransform(slide01ScreenProgress, [0, 1], [0, 1]);

    const slideScreen02Y = useTransform(scrollYProgress, [0, 1 / 5], [0, 1]);

    const cardsSlideScaleAndOpacity = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
        [0, 0, 0, 1, 0, 0],
    );

    const slideCounterCardsRotateX = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
        ["90deg", "90deg", "90deg", "90deg", "0deg", "0deg"],
    );

    const slideCounterCardsOpacity = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
        [0, 0, 0, 0.5, 1, 1],
    );

    const backendScaleUp = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 2.5 / 5, 3 / 5, 4 / 5, 1],
        [0, 0, 1, 0, 0, 0, 0],
    );

    const backendScaleDown = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 2.5 / 5, 3 / 5, 4 / 5, 1],
        [1.5, 1.5, 1, 1.5, 1.5, 1.5, 1.5],
    );

    const backendOpacity = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 2.5 / 5, 3 / 5, 3.5 / 5, 4 / 5, 1],
        [0, 0, 1, 1, 0, 0, 0, 0],
    );

    const slideNumbers = useTransform(
        scrollYProgress,
        [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
        [1, 1, 2, 3, 4, 5],
    );

    React.useEffect(() => {
        return slideNumbers.onChange(async () => {
            setCurrentSlide(Math.round(slideNumbers.get()));
        });
    });

    const slideOpacity = useTransform(
        scrollYProgress,
        [0, 5 / 5, 5.5 / 5],
        [1, 1, 0],
    );

    return (
        <>
            <motion.div
                ref={ref}
                className="h-auto lg:h-[500vh] bg-white -mt-px"
            >
                <div className="hidden w-screen h-0 max-w-full lg:block snap-start" />
                <div className="hidden w-full h-px -mb-px lg:snap-start lg:block" />
                <motion.div
                    ref={sliderViewportRef}
                    className="lg:overflow-hidden mx-auto max-w-7xl h-auto lg:h-screen w-screen top-0 left-0 relative lg:sticky px-7 md:px-10 lg:px-16 xl:px-24 flex flex-col justify-center pt-[86px] pb-[50px]"
                >
                    <div className="flex-shrink-0 w-full">
                        <div className="w-full text-center font-montserrat text-[36px] md:text-[60px] lg:text-[64px] leading-none font-extrabold text-[#1890FF] short:text-[55px]">
                            no constraints
                        </div>
                        <motion.div
                            style={lg ? { opacity: slideOpacity } : {}}
                            className="flex-shrink-0 hidden lg:block"
                        >
                            <div className="relative flex justify-center w-full max-w-5xl gap-4 mx-auto">
                                <motion.div
                                    style={{
                                        zIndex: currentSlide === 1 ? 2 : 0,
                                        color:
                                            currentSlide === 1
                                                ? "#1890FF"
                                                : "#D8D8DC",
                                    }}
                                    className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
                                >
                                    on styling
                                </motion.div>
                                <motion.div
                                    style={{
                                        zIndex: currentSlide === 2 ? 2 : 0,
                                        color:
                                            currentSlide === 2
                                                ? "#1890FF"
                                                : "#D8D8DC",
                                    }}
                                    className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
                                >
                                    on backend
                                </motion.div>
                                <motion.div
                                    style={{
                                        zIndex: currentSlide === 3 ? 2 : 0,
                                        color:
                                            currentSlide === 3
                                                ? "#1890FF"
                                                : "#D8D8DC",
                                    }}
                                    className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
                                >
                                    on workflow
                                </motion.div>
                                <motion.div
                                    style={{
                                        zIndex: currentSlide === 4 ? 2 : 0,
                                        color:
                                            currentSlide === 4
                                                ? "#1890FF"
                                                : "#D8D8DC",
                                    }}
                                    className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
                                >
                                    with opensource
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="overflow-x-visible lg:overflow-x-hidden lg:overflow-y-hidden lg:snap-x lg:snap-mandatory relative flex-1 lg:max-h-[600px]"
                        style={lg ? { opacity: slideOpacity } : {}}
                    >
                        <motion.div
                            className="flex flex-col w-full lg:h-full lg:absolute lg:flex-row"
                            style={lg ? { translateX: slideX } : {}}
                            animate={lg ? {} : { translateX: 0 }}
                        >
                            {/* slide 01 */}
                            <div className="flex items-center justify-center flex-shrink-0 w-full lg:h-full">
                                <div className="flex flex-col w-full h-auto max-w-screen-xl lg:flex-row">
                                    <div className="flex-[1] place-self-start">
                                        <div className="relative flex mt-0 ml-0 lg:ml-8 lg:mt-16">
                                            <motion.div
                                                className="relative flex w-full h-full pointer-events-none lg:absolute"
                                                style={{
                                                    opacity:
                                                        slideScreenText1Progress,
                                                }}
                                            >
                                                <p className="font-montserrat font-medium text-base tracking-tight leading-[20px] max-w-[280px] mb-0 text-[#2A2A42]">
                                                    <strong className="font-bold">
                                                        refine
                                                    </strong>{" "}
                                                    is is{" "}
                                                    <strong className="font-bold">
                                                        design.
                                                    </strong>{" "}
                                                    <div>
                                                        It doesn’t ship with any
                                                        pre-styled components or
                                                        UI by default.
                                                    </div>
                                                    <br />
                                                    <div>
                                                        Instead, you can use any{" "}
                                                        <strong className="font-bold">
                                                            custom design
                                                        </strong>{" "}
                                                        or{" "}
                                                        <strong className="font-bold">
                                                            UI framework
                                                        </strong>{" "}
                                                        for{" "}
                                                        <strong className="font-bold">
                                                            100% control over
                                                            styling.
                                                        </strong>
                                                    </div>
                                                </p>
                                            </motion.div>
                                            <motion.div
                                                className="hidden lg:block font-montserrat font-medium text-base tracking-tight leading-[20px] max-w-[262px] mb-0 text-[#2A2A42] z-[1]"
                                                style={{
                                                    opacity:
                                                        slideScreenText2Progress,
                                                }}
                                            >
                                                <p>
                                                    Not ready for going headless
                                                    yet?
                                                    <div>
                                                        <strong className="font-bold">
                                                            No problem.
                                                        </strong>
                                                    </div>
                                                </p>

                                                <p>
                                                    <strong className="font-bold">
                                                        refine
                                                    </strong>{" "}
                                                    supports three powerful
                                                    <div>
                                                        <strong className="font-bold">
                                                            UI frameworks
                                                        </strong>{" "}
                                                        out-of-the box:
                                                    </div>
                                                </p>

                                                <div className="flex flex-col gap-2">
                                                    <div className="">
                                                        <Link
                                                            to="/examples"
                                                            className="z-[1] appearance-none border border-[#F0F2F5] bg-[#F6F6F9] border-solid rounded-[20px] h-7 w-[153px] flex items-center justify-between pl-3 py-1 pr-1"
                                                        >
                                                            <div className="uppercase text-[#9696B4] text-[12px] leading-[12px] font-montserrat font-bold">
                                                                view examples
                                                            </div>
                                                            <div className="flex items-center justify-center w-5 h-5 pl-px bg-white rounded-full">
                                                                <ExternalLinkIcon className="h-2.5 w-2.5 text-[#9696B4]" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="flex-[2] flex justify-center items-center relative">
                                        <motion.div
                                            style={{
                                                perspective: "500px",
                                                perspectiveOrigin: "center",
                                            }}
                                            whileInView={
                                                !lg
                                                    ? { scale: [0, 1] }
                                                    : undefined
                                            }
                                            viewport={{
                                                margin: "20px",
                                            }}
                                        >
                                            <motion.img
                                                style={{
                                                    filter: "drop-shadow(14.4px 7.2px 21.6px rgba(0, 0, 0, 0.25))",
                                                    width: "96%",
                                                    maxHeight: "524px",
                                                    opacity:
                                                        slideScreenImageCustomUIProgress,
                                                }}
                                                animate={{
                                                    translateZ: ["-5px", "5px"],
                                                    ...(lg
                                                        ? {}
                                                        : {
                                                              scale: [1, 1],
                                                              opacity: [1, 1],
                                                          }),
                                                }}
                                                transition={{
                                                    yoyo: Infinity,
                                                    ease: "easeInOut",
                                                    duration: 3,
                                                    delay: 1,
                                                }}
                                                src="/landing/no-constraints/custom-ui.png"
                                            />
                                            <motion.div
                                                className="font-montserrat bg-[#2A2A42] text-white text-2xl font-extrabold px-4 py-2 rounded-md absolute shadow-startTiles left-[10%] bottom-[20%]"
                                                animate={{
                                                    ...(lg
                                                        ? {}
                                                        : {
                                                              scale: [1, 1],
                                                              opacity: [1, 1],
                                                          }),
                                                }}
                                                transition={{
                                                    yoyo: Infinity,
                                                    ease: "easeInOut",
                                                    duration: 3,
                                                }}
                                                style={{
                                                    ...(lg
                                                        ? {
                                                              opacity:
                                                                  slideScreen01Y,
                                                          }
                                                        : {}),
                                                }}
                                            >
                                                CUSTOM UI
                                            </motion.div>
                                        </motion.div>
                                        <motion.div
                                            className="absolute"
                                            style={{
                                                perspective: "500px",
                                                perspectiveOrigin: "center",
                                                opacity: slideScreen02Y,
                                            }}
                                        >
                                            <motion.img
                                                style={{
                                                    filter: "drop-shadow(14.4px 7.2px 21.6px rgba(0, 0, 0, 0.25))",
                                                    width: "96%",
                                                    maxHeight: "524px",
                                                    opacity: slideScreen02Y,
                                                }}
                                                animate={{
                                                    translateZ: ["-5px", "5px"],
                                                }}
                                                transition={{
                                                    yoyo: Infinity,
                                                    ease: "easeInOut",
                                                    duration: 3,
                                                }}
                                                src="/landing/no-constraints/dashboard-mui.png"
                                            />
                                            <motion.div
                                                className="absolute left-0 z-10 flex flex-col gap-4 bottom-[5%]"
                                                transition={{
                                                    yoyo: Infinity,
                                                    ease: "easeInOut",
                                                    duration: 3,
                                                }}
                                                style={{
                                                    opacity: slideScreen02Y,
                                                }}
                                            >
                                                <div className="font-montserrat flex justify-center bg-[#3FDCF7] text-white text-2xl font-extrabold px-2 py-1 rounded-md shadow-startTiles flex-shrink-0">
                                                    ANT DESIGN
                                                </div>
                                                <div className="translate-x-1/3 font-montserrat flex justify-center bg-[#1890FF] text-white text-2xl font-extrabold px-2 py-1 rounded-md shadow-startTiles flex-shrink-0">
                                                    MATERIAL UI
                                                </div>
                                                <div className="translate-x-2/3  font-montserrat flex justify-center bg-[#105FA9] text-white text-2xl font-extrabold px-2 py-1 rounded-md shadow-startTiles flex-shrink-0">
                                                    MANTINE UI
                                                </div>
                                                <div className="translate-x-full font-montserrat flex justify-center bg-[#450D87] text-white text-2xl font-extrabold px-2 py-1 rounded-md shadow-startTiles flex-shrink-0">
                                                    CHAKRA UI
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <OnBackend />
                            <OnWorkflow />
                            <div className="flex items-center justify-center flex-shrink-0 w-full lg:h-full">
                                <div className="flex w-full h-auto max-w-screen-xl">
                                    <div className="relative flex-1 flex flex-col  text-[#2A2A42] text-center max-w-[800px]y-center items-center w-full gap-4 lg:gap-2">
                                        <div className="pt-5 lg:pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-5 pb-5 max-w-[1000px]">
                                            <motion.div
                                                style={
                                                    lg
                                                        ? {
                                                              rotateX:
                                                                  slideCounterCardsRotateX,
                                                              opacity:
                                                                  slideCounterCardsOpacity,
                                                          }
                                                        : {}
                                                }
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles"
                                            >
                                                <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-[#2A2A42] text-[#6B6B7C] shadow-startTiles">
                                                    <SmallSocialIcons.GithubIcon />
                                                </div>
                                                <div className="font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C]">
                                                    <CountingNumber to={89} />
                                                </div>
                                                <div className="transition-colors font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C]">
                                                    Contributors
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                style={
                                                    lg
                                                        ? {
                                                              rotateX:
                                                                  slideCounterCardsRotateX,
                                                              opacity:
                                                                  slideCounterCardsOpacity,
                                                          }
                                                        : {}
                                                }
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles"
                                            >
                                                <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-[#2A2A42] text-[#6B6B7C] shadow-startTiles">
                                                    <SmallSocialIcons.GithubIcon />
                                                </div>
                                                <div className="transition-[colors,transform] font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    <CountingNumber to={2800} />
                                                    +
                                                </div>
                                                <div className="transition-[colors,transform] font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    Commits
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                style={
                                                    lg
                                                        ? {
                                                              rotateX:
                                                                  slideCounterCardsRotateX,
                                                              opacity:
                                                                  slideCounterCardsOpacity,
                                                          }
                                                        : {}
                                                }
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles"
                                            >
                                                <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-[#2A2A42] text-[#6B6B7C] shadow-startTiles">
                                                    <SmallSocialIcons.GithubIcon />
                                                </div>
                                                <div className="transition-[colors,transform] ease-in-out font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    <CountingNumber
                                                        to={
                                                            Math.floor(
                                                                (starCount
                                                                    ? starCount
                                                                    : 2800) /
                                                                    100,
                                                            ) * 100
                                                        }
                                                    />
                                                    +
                                                </div>
                                                <div className="transition-[colors,transform] ease-in-out font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    GitHub Stars
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                style={
                                                    lg
                                                        ? {
                                                              rotateX:
                                                                  slideCounterCardsRotateX,
                                                              opacity:
                                                                  slideCounterCardsOpacity,
                                                          }
                                                        : {}
                                                }
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles"
                                            >
                                                <div className="transition-[colors,transform] ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-discord text-[#6B6B7C] group-hover:scale-110 shadow-startTiles">
                                                    <SmallSocialIcons.DiscordIcon />
                                                </div>
                                                <div className="font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C]">
                                                    <CountingNumber to={500} />+
                                                </div>
                                                <div className="ttransition-[colors,transform] ease-in-out font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    Discord Members
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                style={
                                                    lg
                                                        ? {
                                                              rotateX:
                                                                  slideCounterCardsRotateX,
                                                              opacity:
                                                                  slideCounterCardsOpacity,
                                                          }
                                                        : {}
                                                }
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles"
                                            >
                                                <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-twitter text-[#6B6B7C] shadow-startTiles">
                                                    <SmallSocialIcons.TwitterIcon />
                                                </div>
                                                <div className="transition-[colors,transform] ease-in-out font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    <CountingNumber to={1000} />
                                                    +
                                                </div>
                                                <div className="transition-[colors,transform] ease-in-out font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                                    Twitter Followers
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                style={{
                                                    rotateX: lg
                                                        ? slideCounterCardsRotateX
                                                        : "unset",
                                                    opacity: lg
                                                        ? slideCounterCardsOpacity
                                                        : "unset",
                                                    background:
                                                        "rgba(255, 255, 255, 0.7)",
                                                    border: "1px solid #ededef",
                                                    boxShadow:
                                                        "4px 8px 16px rgba(42, 42, 66, 0.16)",
                                                }}
                                                transition={
                                                    !lg
                                                        ? {
                                                              duration: 0.3,
                                                              ease: "easeInOut",
                                                              delay: 0.15,
                                                          }
                                                        : {}
                                                }
                                                whileInView={
                                                    !lg
                                                        ? {
                                                              translateY: [
                                                                  100, 0,
                                                              ],
                                                              opacity: [0, 1],
                                                          }
                                                        : {}
                                                }
                                                viewport={{
                                                    once: true,
                                                    margin: "25px",
                                                }}
                                                className="group rounded-[10px] p-2.5 lg:p-0 shadow-tile min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative group group-hover:text-[#1890FF] text-[#2A2A42]"
                                            >
                                                <div className="transition-[colors,transform] ease-in-out font-montserrat font-[900] uppercase text-base text-center group-hover:text-[#1890FF] text-[#6B6B7C] select-none group-hover:scale-125">
                                                    <div className="group-hover:hidden">
                                                        Come to
                                                    </div>
                                                    <div className="group-hover:hidden">
                                                        dark side
                                                    </div>
                                                    <div className="hidden group-hover:block">
                                                        We have
                                                    </div>
                                                    <div className="hidden group-hover:block">
                                                        cookies
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-4 mt-2">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://reddit.com/r/refine"
                                                    >
                                                        <GraySocialIcons.RedditIcon className="block w-6 h-6 hover:scale-110 nested-hover-hidden" />
                                                        <ColoredSocialIcons.RedditIcon className="hidden w-6 h-6 hover:scale-110 nested-hover-visible" />
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://github.com/refinedev/refine"
                                                    >
                                                        <GraySocialIcons.GithubIcon className="block w-6 h-6 hover:scale-110 nested-hover-hidden" />
                                                        <ColoredSocialIcons.GithubIcon className="hidden w-6 h-6 hover:scale-110 nested-hover-visible" />
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://discord.gg/refine"
                                                    >
                                                        <GraySocialIcons.DiscordIcon className="block w-6 h-6 hover:scale-110 nested-hover-hidden" />
                                                        <ColoredSocialIcons.DiscordIcon className="hidden w-6 h-6 hover:scale-110 nested-hover-visible" />{" "}
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://twitter.com/refine_dev"
                                                    >
                                                        <GraySocialIcons.TwitterIcon className="block w-6 h-6 hover:scale-110 nested-hover-hidden" />
                                                        <ColoredSocialIcons.TwitterIcon className="hidden w-6 h-6 hover:scale-110 nested-hover-visible" />
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.linkedin.com/company/refine-dev"
                                                    >
                                                        <GraySocialIcons.LinkedinIcon className="block w-6 h-6 hover:scale-110 nested-hover-hidden" />
                                                        <ColoredSocialIcons.LinkedinIcon className="hidden w-6 h-6 hover:scale-110 nested-hover-visible" />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="max-w-screen-md mt-8 text-base font-montserrat">
                                            <p className="lg:mb-2">
                                                <strong>refine</strong> core is
                                                an open source framework and it
                                                will always{" "}
                                                <strong>stay free</strong>.
                                            </p>
                                            <p className="lg:mb-0">
                                                It has a very strong community
                                                of maintainers, contributers and
                                                and users providing{" "}
                                                <strong>7/24 support</strong> on
                                                our GitHub, Twitter and Discord
                                                channels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                {/* Scroll snap alignment */}
                {Array.from({ length: 5 }, (_, i) => i).map((i) => (
                    <div
                        key={i}
                        className="hidden w-screen h-screen max-w-full lg:block snap-start"
                    />
                ))}
            </motion.div>
        </>
    );
};
