"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home")
    useEffect(() => {
        const menu = document.querySelector(".menu");
        const menuMain = menu.querySelector(".menu-main");
        const goBack = menu.querySelector(".go-back");
        const menuTrigger = document.querySelector(".mobile-menu-trigger");
        const closeMenu = menu.querySelector(".mobile-menu-close");
        let subMenu;
        menuMain.addEventListener("click", (e) => {
            if (!menu.classList.contains("active")) {
                return;
            }
            if (e.target.closest(".menu-item-has-children")) {
                const hasChildren = e.target.closest(".menu-item-has-children");
                showSubMenu(hasChildren);
            }
        });
        goBack.addEventListener("click", () => {
            hideSubMenu();
        });
        menuTrigger.addEventListener("click", () => {
            toggleMenu();
        });
        closeMenu.addEventListener("click", () => {
            toggleMenu();
        });
        document.querySelector(".menu-overlay").addEventListener("click", () => {
            toggleMenu();
        });
        function toggleMenu() {
            menu.classList.toggle("active");
            document.querySelector(".menu-overlay").classList.toggle("active");
        }
        function showSubMenu(hasChildren) {
            subMenu = hasChildren.querySelector(".sub-menu");
            subMenu.classList.add("active");
            subMenu.style.animation = "slideLeft 0.5s ease forwards";
            const menuTitle =
                hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
            menu.querySelector(".current-menu-title").innerHTML = menuTitle;
            menu.querySelector(".mobile-menu-head").classList.add("active");
        }

        function hideSubMenu() {
            subMenu.style.animation = "slideRight 0.5s ease forwards";
            setTimeout(() => {
                subMenu.classList.remove("active");
            }, 300);
            menu.querySelector(".current-menu-title").innerHTML = "";
            menu.querySelector(".mobile-menu-head").classList.remove("active");
        }

        window.onresize = function () {
            if (this.innerWidth > 991) {
                if (menu.classList.contains("active")) {
                    toggleMenu();
                }
            }
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="rowmanage v-center">
                        <div className="header-item item-left">
                            <div className="logo">
                                <Image
                                    height={50}
                                    width={60}
                                    src={"/logo1.png"}
                                    alt="logo image"
                                    style={{ borderRadius: "22px 38px 22px 39px" }}
                                    priority
                                />
                                <p style={{ paddingLeft: "1rem", margin: "0px auto",color:"white" }}>
                                    InExpensive Code
                                </p>{" "}
                            </div>
                        </div>
                        <div className="mobile-menu-trigger">
                            <span></span>
                        </div>
                        <div className="header-item item-center">
                            <div className="menu-overlay"></div>
                            <nav className="menu">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="menu-main">
                                    <li className="" onClick={() => setActive("home")}>
                                        <Link href="/" style={active === "home" ? { color: "#00dbde" } : {}}>Home</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="#" style={["website", "application", "seo", "load", "lead", "ads"].includes(active) ? { color: "#00dbde" } : {}}>
                                            All Services <i className="fa fa-angle-down"></i>
                                        </Link>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item font">
                                                <h4 className="title">IT Service</h4>
                                                <ul>
                                                    <li onClick={() => setActive("website")}>
                                                        <i className="fa-solid fa-laptop-code"></i>
                                                        <Link href="/website">Website Develpment</Link>
                                                    </li>
                                                    <li onClick={() => setActive("application")}>
                                                        <i className="fa-solid fa-mobile-screen"></i>
                                                        <Link href="/application">Application Develpment</Link>
                                                    </li>
                                                    <li onClick={() => setActive("seo")}>
                                                        <i className="fa-brands fa-searchengin"></i>
                                                        <Link href="/seo">SEO Develpment</Link>
                                                    </li>
                                                    <li onClick={() => setActive("load")}>
                                                        <i className="fa-solid fa-scale-balanced"></i>
                                                        <Link href="/loadmanagement">Load Management</Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="list-item font">
                                                <h4 className="title">Digital Marketing</h4>
                                                <ul>
                                                    <li onClick={() => setActive("lead")}>
                                                        <i className="fa-solid fa-chalkboard-user"></i>
                                                        <Link href="/leadgenerater">Lead Generater</Link>
                                                    </li>
                                                    <li onClick={() => setActive("ads")}>
                                                        <i className="fa-brands fa-square-instagram"></i>
                                                        <Link href="/ads">FaceBook/Instagram/Google ADS</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-person-burst"></i>
                                                        <Link href="/aiservice">Artificial Intelligence(AI)</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="list-item">
                                                <div style={{ position: 'relative', width: '100%', height: '80%', aspectRatio: '2 / 1' }}>
                                                    <Image
                                                        src="/seo6.webp"
                                                        alt="Hero Banner"
                                                        fill
                                                        priority
                                                        style={{ objectFit: 'cover' }}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                                        quality={75}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li onClick={() => setActive("contact")}>
                                        <Link href="/contact" style={active === "contact" ? { color: "#00dbde" } : {}} >Contact</Link>
                                    </li>
                                    <li onClick={() => setActive("about")}>
                                        <Link style={active === "about" ? { color: "#00dbde" } : {}} href="/about">About</Link>
                                    </li>
                                    <li onClick={() => setActive("blog")}>
                                        <Link style={active === "blog" ? { color: "#00dbde" } : {}} href="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-item item-right">
                            <Link href="#">
                                <i className="fas fa-phone"></i>
                            </Link>
                            <div className="mobile-menu-trigger">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Navbar;
