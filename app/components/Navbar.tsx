'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed text-xs top-0 inset-x-0 mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <div className="flex items-center gap-20 ">
                <div className="object-cover">
                    <Link href={"/"}>
                        <Image src="/images/logo1.png" alt="Logo" width={40} height={40} priority/>
                        <MenuItem setActive={setActive} active={active} item="">
                        </MenuItem>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <MenuItem setActive={setActive} active={active} item="GAMES ^">
                        <div className="flex flex-col space-y-4">
                            <HoveredLink href="/ourGames">OUR GAMES</HoveredLink>
                            <HoveredLink href="/ourGames">EXPLORE GAMES</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="JOIN US ^">
                        <div className="flex flex-col space-y-4">
                            <HoveredLink href="/joinUs">JOIN US</HoveredLink>
                            <div className="flex flex-col space-y-1">
                                <p className="text-white">CONNECT WITH US</p>
                                <div className="flex space-x-4">
                                    <HoveredLink href="/joinUs">CON</HoveredLink>
                                    <HoveredLink href="/joinUs">WITH</HoveredLink>
                                    <HoveredLink href="/joinUs">US</HoveredLink>
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
            <div className="flex items-center gap-7">
                <Link href={"/customerSupport"}>
                    <MenuItem setActive={setActive} active={active} item="CUSTOMER SUPPORT"></MenuItem>
                </Link>
                <Link href={"/myAccount"}>
                    <MenuItem setActive={setActive} active={active} item="MY ACCOUNT"></MenuItem>
                </Link>
            </div>
        </Menu>
    </div>
  )
}

export default Navbar
