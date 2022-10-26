import { motion } from "framer-motion";
import React, { useRef } from "react";

import {
    BusinessLogic01,
    BusinessLogic02,
    BusinessLogic04,
    BusinessLogic03,
} from "../icons";

const OnWorkflow = () => {
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

    return (
        <div className="relative flex items-center justify-center flex-shrink-0 w-full mb-24 lg:mb-0 lg:h-full">
            <div className="flex flex-col w-full h-auto max-w-screen-xl gap-20 lg:flex-row md:gap-32 lg:gap-0">
                <div className="flex-1 flex relative -mx-6 lg:mx-0 px-[55px] pt-0 pb-4 lg:px-12 lg:pb-12 lg:pt-0 justify-center items-center">
                    <motion.div
                        style={{
                            perspective: "1000px",
                            perspectiveOrigin: "left top",
                        }}
                        viewport={{
                            margin: "20px",
                        }}
                        className="flex relative w-full max-w-[350px] h-full"
                    >
                        <motion.div
                            className="bg-white h-min rounded-[20px]"
                            {...businessLogicAnimationOptions.current}
                            style={{
                                width: "45%",
                                boxShadow:
                                    "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
                            }}
                        >
                            <BusinessLogic02
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="bg-white absolute top-[10%] left-[23%] h-min rounded-[20px]"
                            {...businessLogicAnimationOptions.current}
                            style={{
                                width: "45%",
                                boxShadow:
                                    "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
                            }}
                        >
                            <BusinessLogic03
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="bg-white absolute top-[20%] left-[47%] h-min rounded-[20px]"
                            {...businessLogicAnimationOptions.current}
                            style={{
                                width: "45%",
                                boxShadow:
                                    "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
                            }}
                        >
                            <BusinessLogic04
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="bg-white absolute top-[30%] left-[71%] h-min rounded-[20px]"
                            {...businessLogicAnimationOptions.current}
                            style={{
                                width: "45%",
                                boxShadow:
                                    "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
                            }}
                        >
                            <BusinessLogic01
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex-1 place-self-start">
                    <div className="max-w-[390px] font-montserrat ml-auto mr-auto lg:mr-0 lg:-ml-5 text-[#2A2A42]">
                        <p className="text-base max-w-[360px]">
                            <strong>refine</strong> gives you and your team{" "}
                            <strong>100% control</strong> over your project and
                            totally prevents vendor lock-in:
                        </p>
                        <p className="text-xs">
                            <ul>
                                <li>
                                    Write your code as you are developing a
                                    vanilla React project.
                                </li>
                                <li>
                                    Add unlimited 3rd party modules and
                                    integrations.
                                </li>
                                <li>
                                    Use your own source control, CI & CD
                                    systems.
                                </li>
                                <li>
                                    Deploy your application anywhere, including
                                    edge & cloud workers.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnWorkflow;
