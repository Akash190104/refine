import React, { useRef } from "react";
import Link from "@docusaurus/Link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTWBreakpoints } from "../../../hooks/use-tw-breakpoints";
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { useGithubContext } from "../../../context/GithubContext";
import SpotLight from "./spot-light";
import OnBackend from "./on-backend";
import OnWorkflow from "./on-workflow";
import WithOpenSource from "./with-open-source";
import OnStyling from "./on-styling";

export const SectionNoConstraints: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    const { sm, md, lg, xl } = useTWBreakpoints();

    const [currentSlide, setCurrentSlide] = React.useState(1);

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
            <OnStyling />
            <OnBackend />
            <OnWorkflow />
            <WithOpenSource />
        </>
        // <>
        //     <motion.div
        //         ref={ref}
        //         className="h-auto lg:h-[500vh] bg-white -mt-px"
        //     >
        //         <motion.div className="lg:overflow-hidden mx-auto max-w-7xl h-auto lg:h-screen w-screen top-0 left-0 relative lg:sticky px-7 md:px-10 lg:px-16 xl:px-24 flex flex-col justify-center pt-[86px] pb-[50px]">
        //             <div className="flex-shrink-0 w-full">
        //                 <div className="w-full text-center font-montserrat text-[36px] md:text-[60px] lg:text-[64px] leading-none font-extrabold text-[#1890FF] short:text-[55px]">
        //                     no constraints
        //                 </div>
        //                 <motion.div
        //                     style={lg ? { opacity: slideOpacity } : {}}
        //                     className="flex-shrink-0 hidden lg:block"
        //                 >
        //                     <div className="relative flex justify-center w-full max-w-5xl gap-4 mx-auto">
        //                         <motion.div
        //                             style={{
        //                                 zIndex: currentSlide === 1 ? 2 : 0,
        //                                 color:
        //                                     currentSlide === 1
        //                                         ? "#1890FF"
        //                                         : "#D8D8DC",
        //                             }}
        //                             className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
        //                         >
        //                             on styling
        //                         </motion.div>
        //                         <motion.div
        //                             style={{
        //                                 zIndex: currentSlide === 2 ? 2 : 0,
        //                                 color:
        //                                     currentSlide === 2
        //                                         ? "#1890FF"
        //                                         : "#D8D8DC",
        //                             }}
        //                             className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
        //                         >
        //                             on backend
        //                         </motion.div>
        //                         <motion.div
        //                             style={{
        //                                 zIndex: currentSlide === 3 ? 2 : 0,
        //                                 color:
        //                                     currentSlide === 3
        //                                         ? "#1890FF"
        //                                         : "#D8D8DC",
        //                             }}
        //                             className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
        //                         >
        //                             on workflow
        //                         </motion.div>
        //                         <motion.div
        //                             style={{
        //                                 zIndex: currentSlide === 4 ? 2 : 0,
        //                                 color:
        //                                     currentSlide === 4
        //                                         ? "#1890FF"
        //                                         : "#D8D8DC",
        //                             }}
        //                             className="text-base font-medium text-center uppercase transition-colors duration-200 ease-in-out font-montserrat"
        //                         >
        //                             with opensource
        //                         </motion.div>
        //                     </div>
        //                 </motion.div>
        //             </div>
        //             <motion.div
        //                 className="overflow-x-visible lg:overflow-x-hidden lg:overflow-y-hidden lg:snap-x lg:snap-mandatory relative flex-1 lg:max-h-[600px]"
        //                 style={lg ? { opacity: slideOpacity } : {}}
        //             >
        //                 <motion.div
        //                     className="flex flex-col w-full lg:h-full lg:absolute lg:flex-row"
        //                     style={lg ? { translateX: slideX } : {}}
        //                     animate={lg ? {} : { translateX: 0 }}
        //                 >
        //                     <OnStyling />
        //                     <OnBackend />
        //                     <OnWorkflow />
        //                     <WithOpenSource />
        //                 </motion.div>
        //             </motion.div>
        //         </motion.div>
        //         {/* Scroll snap alignment */}
        //         {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        //             <div
        //                 key={i}
        //                 className="hidden w-screen h-screen max-w-full lg:block snap-start"
        //             />
        //         ))}
        //     </motion.div>
        // </>
    );
};
