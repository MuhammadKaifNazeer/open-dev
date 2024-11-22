"use client";

import React, { useEffect, useState } from "react";
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Gitlab } from "lucide-react";
import FadeAnimation from "../ui/animations/fade";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const ToggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
            style={{ transform: "none" }}
        >
            <FadeAnimation direction="fadeDown" inView={false}>
                <div className="hidden lg:block w-full">
                    <div
                        className={`flex relative justify-between px-4 py-2 rounded-lg mx-auto ${scrolled
                            ? "w-[80%]  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0px_0px_9.39138px_rgba(0,0,0,0.1)] border"
                            : "w-full bg-transparent shadow-none"
                            } transition-all duration-500 ease-in-out`}
                    >
                        <div className="flex flex-row gap-2 items-center">
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white"
                                href="/"
                            >
                                <span className="text-lg font-bold">Open Orbit</span>
                            </Link>
                            <div className="flex items-center gap-1.5">
                                <Link
                                    href='/projects'
                                >
                                    <Button
                                        variant={'ghost'}
                                         className="rounded-full"
                                    >
                                        Projects
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <ThemeToggler  className="rounded-full"/>
                            <Link
                                href={'/signin'}
                            >
                                <Button variant={'ghost'}  className="rounded-full">
                                    Login
                                </Button>
                            </Link>
                            <Link
                                href={'/signup'}
                            >
                                <Button variant={'secondary'} className="rounded-full">
                                    Join Community
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeAnimation>
            <div className="flex h-full w-full items-center lg:hidden ">
                <FadeAnimation direction="fadeDown" inView={false} className="w-full">
                    <div className={`flex justify-between bg-transparent items-center w-full rounded-lg px-2.5 py-1.5 transition duration-200 
        ${scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md dark:shadow-[0px_0px_9.39138px_rgba(0,0,0,0.1)]" : ""}`}>
                        <Link
                            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white"
                            href="/"
                        >
                            <span className="text-lg font-bold">Open Orbit</span>
                        </Link>
                        <div className="flex items-center justify-end space-x-2">
                            <ThemeToggler className="rounded-full" />
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="h-6 w-6"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16-16z"></path>
                                        </svg>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="mr-4 mt-2">
                                        <DropdownMenuItem>
                                            <Link
                                                href='/projects'
                                                className="w-full h-full"
                                            >
                                                Projects
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Link
                                                href='/signin'
                                                className="w-full h-full"
                                            >
                                                SignIn
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href='/signup'
                                                className="w-full h-full"
                                            >
                                                SignUp
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Link
                                                href="https://github.com/MuhammadKaifNazeer/open-orbit"
                                                target="_blank"
                                                className="w-full h-full"
                                            >
                                                Github
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </FadeAnimation>
            </div>
        </nav >
    );
};

export default Navbar;