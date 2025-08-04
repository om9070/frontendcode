"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [active,setActive]=useState("home")
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
            {/* <nav>
                <div classNameNameName="navbar-container">
                    <div classNameNameName="logo">
                        <Image width={60} height={50} src={"/logo.png"} alt='logo image' style={{ borderRadius: '30px' }} />
                        <p style={{ paddingLeft: '1rem', margin: '0px auto' }}>Flowbite</p>

                    </div>
                    <input type="checkbox" id="menu-toggle" classNameNameName="menu-toggle" />
                    <label htmlFor="menu-toggle" classNameNameName="hamburger">☰</label>

                    <ul classNameNameName="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li classNameNameName="dropdown">
                            <Link href="#">Company ▼</Link>
                            <div classNameNameName="mega-menu">
                                <div classNameNameName="menu-column">
                                    <h4 classNameNameName='font'>IT Services</h4>
                                    <Link href="/website">Website Develpment</Link>
                                    <Link href="/application">App Develpment</Link>
                                    <Link href="/seo">SEO Develpment</Link>
                                    <Link href="/loadmanagement">Load Management</Link>
                                    <Link href="#">Graphic Designer</Link>

                                </div>
                                <div classNameNameName="menu-column">
                                    <h4 classNameNameName='font'>Digital Service</h4>
                                    <Link href="#">Lead Generater</Link>
                                    <Link href="#">FaceBook/Instagram/Google ADS</Link>
                                    <Link href="#">Influencer Support</Link>
                                </div>
                                <div classNameNameName="menu-column preview">
                                    <p><strong>Preview the new Flowbite dashboard navigation.</strong></p>
                                    <button>Get started →</button>
                                </div>
                            </div>
                        </li>
                        <li><Link href="#">Contact</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">About</Link></li>
                    </ul>
                </div>
            </nav> */}

            <header className="header">
                <div className="container">
                    <div className="rowmanage v-center">
                        <div className="header-item item-left">
                            <div className="logo">
                                <Image
                                    width={60}
                                    height={50}
                                    src={"/logo.png"}
                                    alt="logo image"
                                    style={{ borderRadius: "30px" }}
                                />
                                <p style={{ paddingLeft: "1rem", margin: "0px auto" }}>
                                    Flowbite
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
                                    <li className="" onClick={()=>setActive("home")}>
                                        <Link href="/" style={active==="home"?{color:"#00dbde"}:{}}>Home</Link>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <Link href="#">New <i className="fa fa-angle-down"></i></Link>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item text-center">
                                                <Link href="#">
                                                    <img
                                                        src="https://th.bing.com/th/id/R.ce8de1adaa3fcc169f0d97c436b8274b?rik=6W1qX6Qp03lNWg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504633273314-6a929fcd7090%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3de8e0ff2cce3792a276fa84086113a17c&ehk=chx16tzqSRzpfA6BYM4FNaZZ%2fMJwEtxaqHPW1FZb9FI%3d&risl=&pid=ImgRaw&r=0"
                                                        alt="Fashion"
                                                    />
                                                    <h4 className="title">Fashion</h4>
                                                </Link>
                                            </div>
                                            <div className="list-item text-center">
                                                <Link href="#">
                                                    <img
                                                        src="https://img.freepik.com/free-photo/male-technician-repairing-computer-motherboard-wooden-desk_23-2147923493.jpg?w=740&t=st=1671765056~exp=1671765656~hmac=4c8dffc9558819b4c21b126aaa394150f48adc3be9c8004c0b65d0420709ec00"
                                                        alt="Electronics"
                                                    />
                                                    <h4 className="title">Electronics</h4>
                                                </Link>
                                            </div>
                                            <div className="list-item text-center">
                                                <Link href="#">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                                        alt="Mobiles"
                                                    />
                                                    <h4 className="title">Mobiles</h4>
                                                </Link>
                                            </div>
                                            <div className="list-item text-center">
                                                <Link href="#">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                                                        alt="Appliances"
                                                    />
                                                    <h4 className="title">Appliances</h4>
                                                </Link>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li className="menu-item-has-children">
                                        <Link href="#" style={["website","application","seo","load","lead","ads"].includes(active)?{color:"#00dbde"}:{}}>
                                            All Services <i className="fa fa-angle-down"></i>
                                        </Link>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item font">
                                                <h4 className="title">IT Service</h4>
                                                <ul>
                                                    <li onClick={()=>setActive("website")}>
                                                        <i className="fa-solid fa-laptop-code"></i>
                                                        <Link href="/website">Website Develpment</Link>
                                                    </li>
                                                    <li onClick={()=>setActive("application")}>
                                                        <i className="fa-solid fa-mobile-screen"></i>
                                                        <Link href="/application">Application Develpment</Link>
                                                    </li>
                                                    <li onClick={()=>setActive("seo")}>
                                                        <i className="fa-brands fa-searchengin"></i>
                                                        <Link href="/seo">SEO Develpment</Link>
                                                    </li>
                                                    <li onClick={()=>setActive("load")}>
                                                        <i className="fa-solid fa-scale-balanced"></i>
                                                        <Link href="/loadmanagement">Load Management</Link>
                                                    </li>
                                                    
                                                </ul>
                                                {/* <h4 className="title">Digital Marketing</h4>
                                                <ul>
                                                    <li>
                                                        <Link href="#">Moisturizer</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Face powder</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Lipstick</Link>
                                                    </li>
                                                </ul> */}
                                            </div>
                                            <div className="list-item font">
                                                <h4 className="title">Digital Marketing</h4>
                                                <ul>
                                                    <li onClick={()=>setActive("lead")}>
                                                        <i className="fa-solid fa-chalkboard-user"></i>
                                                        <Link href="/leadgenerater">Lead Generater</Link>
                                                    </li>
                                                    <li onClick={()=>setActive("ads")}>
                                                        <i className="fa-brands fa-square-instagram"></i>
                                                        <Link href="/ads">FaceBook/Instagram/Google ADS</Link>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-person-burst"></i>
                                                        <Link href="#">Influencer Support</Link>
                                                    </li>
                                                </ul>
                                                {/* <h4 className="title">Furniture</h4>
                                                <ul>
                                                    <li>
                                                        <Link href="#">Chairs</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Tables</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Doors</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Bed</Link>
                                                    </li>
                                                </ul> */}
                                            </div>
                                            {/* <div className="list-item">
                                                <h4 className="title">Home, Kitchen</h4>
                                                <ul>
                                                    <li>
                                                        <Link href="#">Kettle</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Toaster</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Dishwasher</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Microwave oven</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Pitcher</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Blender</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Colander</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Tureen</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Cookware</Link>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            <div className="list-item">
                                                <img
                                                  className="imageNav"
                                                    src="/seo6.jpg"
                                                    alt="Chair"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <Link href="#">Blog <i className="fas fa-angle-down"></i></Link>
                                        <div className="sub-menu single-column-menu">
                                            <ul>
                                                <li><Link href="#">Standard Layout</Link></li>
                                                <li><Link href="#">Grid Layout</Link></li>
                                                <li><Link href="#">single Post Layout</Link></li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <Link href="#">Pages <i className="fas fa-angle-down"></i></Link>
                                        <div className="sub-menu single-column-menu">
                                            <ul>
                                                <li><Link href="#">Login</Link></li>
                                                <li><Link href="#">Register</Link></li>
                                                <li><Link href="#">Faq</Link></li>
                                                <li><Link href="#">404 Page</Link></li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li onClick={()=>setActive("contact")}>
                                        <Link href="/contact"  style={active==="contact"?{color:"#00dbde"}:{}} >Contact</Link>
                                    </li>
                                    <li onClick={()=>setActive("about")}>
                                        <Link style={active==="about"?{color:"#00dbde"}:{}} href="/about">About</Link>
                                    </li>
                                    <li onClick={()=>setActive("blog")}>
                                        <Link style={active==="blog"?{color:"#00dbde"}:{}} href="/blog">Blog</Link>
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
