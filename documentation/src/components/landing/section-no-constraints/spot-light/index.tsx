import React, { FC } from "react";
import { motion, MotionProps } from "framer-motion";

import GradientCyan from "./gradient-svg-cyan";
import GradientBlue from "./gradient-svg-blue";
import GradientPurple from "./gradient-svg-purple";

const gradients = {
    cyan: (props) => <GradientCyan {...props} />,
    blue: (props) => <GradientBlue {...props} />,
    purple: (props) => <GradientPurple {...props} />,
};

interface SpotLightProps extends MotionProps {
    variant: keyof typeof gradients;
    size?: {
        width: number;
        height: number;
    };
}

const SpotLight: FC<SpotLightProps> = ({ variant, size, style, ...props }) => {
    return (
        <motion.div
            {...props}
            style={{
                ...style,
                position: "absolute",
            }}
        >
            {gradients[variant](size)}
        </motion.div>
    );
};

export default SpotLight;

{
    /* <SpotLight
style={{
    x: spotlightCyanX,
    y: spotlightCyanY,
    translateX: spotlightTranslate,
}}
variant="cyan"
/>
<SpotLight
style={{
    x: spotlightBlueX,
    y: spotlightBlueY,
    translateX: spotlightTranslate,
}}
variant="blue"
/>
<SpotLight
style={{
    x: spotlightPurpleX,
    y: spotlightPurpleY,
    translateX: spotlightTranslate,
}}
variant="purple"
/> */
}

// const spotlightCyanX = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [480, 480, 430, 190, 700, 700],
// );

// const spotlightCyanY = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [260, 260, 125, 10, -60, -60],
// );

// const spotlightBlueX = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [570, 570, 565, -60, 395, 395],
// );

// const spotlightBlueY = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [-20, -20, -85, 125, -45, -45],
// );

// const spotlightPurpleX = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [320, 320, 260, 170, 480, 480],
// );

// const spotlightPurpleY = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     [-120, -120, -105, 125, 50, 50],
// );

// const spotlightTranslate = useTransform(
//     scrollYProgress,
//     [0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1],
//     ["0%", "0%", "0%", "0%", "0%", "-500%"],
// );
