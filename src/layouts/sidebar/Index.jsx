import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import logo2 from "../../assets/logo2.png";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { CiBitcoin } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h z-[998] bg-zinc-950 ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className="bg-zinc-900 text-white shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
            >
                <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
                    <img
                        src={logo2}
                        width={120}
                        alt=""
                    />
                </div>

                <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                        <li>
                            <NavLink to={"/"} className="link">
                                <AiOutlineHome size={23} className="min-w-max" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/population-data"} className="link">
                                <BsPerson size={23} className="min-w-max" />
                                Population Data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/crypto-prices"} className="link">
                                <CiBitcoin size={23} className="min-w-max" />
                                Cryptocurrency Data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/settings"} className="link">
                                <SlSettings size={23} className="min-w-max" />
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                    {open && (
                        <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
                            <div className="flex border-y border-slate-300 p-4 items-center justify-evenly">
                                <IoPersonCircleOutline size={40} className="min-w-max" />
                                <div>
                                    <p>Honey Chauhan</p>
                                    <small>honey.mec17@nituk.ac.in</small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                            : {
                                x: -10,
                                y: -200,
                                rotate: 180,
                            }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
            </motion.div>
            <div className="m-3 md:hidden text-white" onClick={() => setOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};

export default Sidebar;