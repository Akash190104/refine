import { motion } from "framer-motion";
import React from "react";
import {
    GraySocialIcons,
    SmallSocialIcons,
    ColoredSocialIcons,
} from "../icons";
import { CountingNumber } from "../counting-number";
import { useGithubContext } from "../../../context/GithubContext";

const WithOpenSource = () => {
    const { starCount } = useGithubContext();

    return (
        <div className="flex items-center justify-center flex-shrink-0 w-full lg:h-full">
            <div className="flex w-full h-auto max-w-screen-xl">
                <div className="relative flex-1 flex flex-col  text-[#2A2A42] text-center max-w-[800px]y-center items-center w-full gap-4 lg:gap-2">
                    <div className="pt-5 lg:pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-5 pb-5 max-w-[1000px]">
                        <motion.div className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles">
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
                        <motion.div className="group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles">
                            <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-[#2A2A42] text-[#6B6B7C] shadow-startTiles">
                                <SmallSocialIcons.GithubIcon />
                            </div>
                            <div className="transition-[colors,transform] font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                <CountingNumber to={2800} />+
                            </div>
                            <div className="transition-[colors,transform] font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                Commits
                            </div>
                        </motion.div>
                        <motion.div className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles">
                            <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-[#2A2A42] text-[#6B6B7C] shadow-startTiles">
                                <SmallSocialIcons.GithubIcon />
                            </div>
                            <div className="transition-[colors,transform] ease-in-out font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                <CountingNumber
                                    to={
                                        Math.floor(
                                            (starCount ? starCount : 2800) /
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
                        <motion.div className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles">
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
                        <motion.div className="transition-colors group border border-solid border-[#ededef] rounded-[10px] bg-[#ffffffb3] hover:bg-white p-2.5 lg:p-0  min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative select-none shadow-startTiles">
                            <div className="transition-colors ease-in-out bg-[#ededef] group-hover:bg-white w-[42px] h-[36px] absolute right-4 top-0 flex items-center justify-center rounded-b group-hover:text-twitter text-[#6B6B7C] shadow-startTiles">
                                <SmallSocialIcons.TwitterIcon />
                            </div>
                            <div className="transition-[colors,transform] ease-in-out font-montserrat text-4xl font-black text-center group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                <CountingNumber to={1000} />+
                            </div>
                            <div className="transition-[colors,transform] ease-in-out font-montserrat text-xs font-medium text-center mt-2 group-hover:text-[#1890FF] text-[#6B6B7C] group-hover:scale-110">
                                Twitter Followers
                            </div>
                        </motion.div>
                        <motion.div className="group rounded-[10px] p-2.5 lg:p-0 shadow-tile min-h-[106px] short:min-h-[95px] short:max-h-[95px] flex flex-col justify-center relative group group-hover:text-[#1890FF] text-[#2A2A42]">
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
                            <strong>refine</strong> core is an open source
                            framework and it will always{" "}
                            <strong>stay free</strong>.
                        </p>
                        <p className="lg:mb-0">
                            It has a very strong community of maintainers,
                            contributers and and users providing{" "}
                            <strong>7/24 support</strong> on our GitHub, Twitter
                            and Discord channels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithOpenSource;
