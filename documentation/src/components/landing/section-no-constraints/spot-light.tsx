import { motion, MotionProps } from "framer-motion";
import React, { FC } from "react";

const background = {
    cyan: "radial-gradient(circle, rgba(128,232,250,1) 0%, rgba(255,255,255,0) 50%)",
    purple: "radial-gradient(circle, rgba(206, 178, 238,1) 0%, rgba(255, 255, 255, 0) 50%)",
    blue: "radial-gradient(circle, rgba(24, 144, 255, 0.5) 0%, rgba(255,255,255,0) 50%)",
};

type Size = {
    width?: string;
    height?: string;
};

interface SpotLightProps extends MotionProps {
    size?: Size;
    variant: keyof typeof background;
}

const SpotLight: FC<SpotLightProps> = ({
    variant,
    size = { height: "524px", width: "524px" },
    style,
    ...props
}) => {
    return (
        <motion.div
            {...props}
            style={{
                ...style,
                ...size,
                position: "absolute",
                background: background[variant],
            }}
        />
    );
};

export default SpotLight;
