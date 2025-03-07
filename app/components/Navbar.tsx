'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed text-sm top-0 inset-x-0 mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <div className="flex gap-18">
                <div className="">
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="HOME"></MenuItem>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <MenuItem setActive={setActive} active={active} item="GAMES ^">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/ourGames">OUR GAMES</HoveredLink>
                            <HoveredLink href="/ourGames">EXPLORE GAMES</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="JOIN US ^">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/joinUs">JOIN US</HoveredLink>
                            <div className="flex flex-col space-y-1 text-sm">
                                <p className="text-white">CONNECT WITH US</p>
                                <div className="flex space-x-4 text-sm">
                                    <HoveredLink href="/connectWithUS">CON</HoveredLink>
                                    <HoveredLink href="/connectWithUS">WITH</HoveredLink>
                                    <HoveredLink href="/connectWithUS">US</HoveredLink>
                                </div>
                            </div>
                        </div>
                    </MenuItem>
                    <Link href={"/aboutus"}>
                        <MenuItem setActive={setActive} active={active} item="WHO WE ARE"></MenuItem>
                    </Link>
                    <Link href={"/news"}>
                        <MenuItem setActive={setActive} active={active} item="NEWS"></MenuItem>
                    </Link>
                </div>
            </div>
            <div className="flex"></div>
        </Menu>
    </div>
  )
}

export default Navbar
