import { motion } from "framer-motion";
import React from "react";

import {
    BusinessLogic01,
    BusinessLogic02,
    BusinessLogic04,
    BusinessLogic03,
} from "../icons";

const businessLogicAnimationOptions = {
    animate: {
        rotateX: ["10deg", "15deg"],
        rotateY: ["25deg", "30deg"],
    },
    transition: {
        yoyo: Infinity,
        ease: "easeInOut",
        duration: 3,
        delay: 0,
    },
};

const BusinessLogicCards = () => {
    return (
        <>
            <motion.div
                className="bg-white h-min rounded-[20px]"
                {...businessLogicAnimationOptions}
                style={{
                    width: "45%",
                    boxShadow: "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
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
                {...businessLogicAnimationOptions}
                style={{
                    width: "45%",
                    boxShadow: "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
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
                {...businessLogicAnimationOptions}
                style={{
                    width: "45%",
                    boxShadow: "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
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
                {...businessLogicAnimationOptions}
                style={{
                    width: "45%",
                    boxShadow: "-12px 16px 28px 0 rgba(120, 120, 168, 0.3)",
                }}
            >
                <BusinessLogic01
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </motion.div>
        </>
    );
};

export default BusinessLogicCards;
