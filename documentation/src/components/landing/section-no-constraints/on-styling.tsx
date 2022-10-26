import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import React from "react";
import { ExternalLinkIcon } from "../icons/external-link-icon";

const OnStyling = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col">
                <div className="flex-[1] place-self-start">
                    <div className="relative flex mt-0 ml-0 lg:ml-8 lg:mt-16">
                        <motion.div className="relative flex w-full h-full pointer-events-none">
                            <p className="font-montserrat font-medium text-base tracking-tight leading-[20px] max-w-[280px] mb-0 text-[#2A2A42]">
                                <strong className="font-bold">refine</strong> is
                                is{" "}
                                <strong className="font-bold">design.</strong>{" "}
                                <div>
                                    It doesn’t ship with any pre-styled
                                    components or UI by default.
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
                                        100% control over styling.
                                    </strong>
                                </div>
                            </p>
                        </motion.div>
                        <motion.div className="font-montserrat font-medium text-base tracking-tight leading-[20px] max-w-[262px] mb-0 text-[#2A2A42]">
                            <p>
                                Not ready for going headless yet?
                                <div>
                                    <strong className="font-bold">
                                        No problem.
                                    </strong>
                                </div>
                            </p>

                            <p>
                                <strong className="font-bold">refine</strong>{" "}
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
                                        className="z-[1] border border-[#F0F2F5] bg-[#F6F6F9] border-solid rounded-[20px] h-7 w-[153px] flex items-center justify-between pl-3 py-1 pr-1"
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
                        viewport={{
                            margin: "20px",
                        }}
                    >
                        <motion.img
                            style={{
                                filter: "drop-shadow(14.4px 7.2px 21.6px rgba(0, 0, 0, 0.25))",
                                width: "96%",
                                maxHeight: "524px",
                            }}
                            animate={{
                                translateZ: ["-5px", "5px"],
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
                            transition={{
                                yoyo: Infinity,
                                ease: "easeInOut",
                                duration: 3,
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
                        }}
                    >
                        <motion.img
                            style={{
                                filter: "drop-shadow(14.4px 7.2px 21.6px rgba(0, 0, 0, 0.25))",
                                width: "96%",
                                maxHeight: "524px",
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
    );
};

export default OnStyling;
