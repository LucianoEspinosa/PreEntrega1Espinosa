import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "./CartWidget";
import logo from "./img/fragancesnet.png";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        const handleScroll = () => {
            setIsNavOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleScroll = () => {
        if (isNavOpen) {
            setIsNavOpen(false);
        }
    };

//     return (
//         <div className="fixed-top cabecera">
//         <div className="container">
//             <div className="row navbar navbar-expand-md fs-7 fs-md-5 d-flex align-items-end align-items-md-center" onScroll={handleScroll}>
//                 <Link to={"/"} className="col-1 col-md-2 d-flex  text-decoration-none">
//                     <img src={logo} className="w-50" alt="logo de fragances.net" />
                    
                
//                 </Link>
//                 <h1 className="col-8 d-md-none ">Fragances.net</h1>

//                 {/* <div className="col-2 d-flex d-md-none align-items-center"> */}
//                     <div className="col-1 d-md-none"><CartWidget  /></div>
//                     <div className="col-2"><button className="  navbar-toggler custom-button d-md-none" type="button" onClick={toggleNav}>{isNavOpen ? <FaTimes /> : <FaBars />}</button></div>
                    
//                 {/* </div> */}


//                 <div ref={navRef} className={`col-md-8 collapse navbar-collapse flex-column py-0  ${isNavOpen ? 'show' : ''}`} id="navbarNav">
//                 <h1 className="d-none d-md-block mb-4">Fragances.net</h1>
//                     <ul className="navbar-nav">
                        
//                         <li className="nav-item">
//                             <Link className="nav-link py-0" to={"ofertas"}>
//                                 Ofertas
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link py-0" to={"masvendidos"}>
//                                 Mas Vendidos
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link py-0" to={"/category/hombre"}>
//                                 Para Ellos
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link py-0" to={"/category/mujer"}>
//                                 Para Ellas
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link py-0 " to={"/category/unisex"}>
//                                 Para Todos
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className={`col-2 col-md-2 d-none d-md-flex justify-content-end align-items-center ${isNavOpen ? 'justify-content-start' : ''}`}>
//                     <CartWidget />
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default NavBar;


return (
    <div className="fixed-top cabecera">
    <div className="container">
        <div className="row navbar navbar-expand-md fs-7 fs-md-5 d-flex align-items-end align-items-md-center" onScroll={handleScroll}>
            <Link to={"/"} className="col-8 col-md-2 d-flex align-items-end text-decoration-none text-black">
                <img src={logo} className="w-50 logoStyle" alt="logo de fragances.net" />
                <h1 className=" d-md-none ">Fragances.net</h1>
            
            </Link>
            <div className="col-4 col-md-2 d-flex d-md-none align-items-center  justify-content-end">
                <CartWidget />
                <button className="navbar-toggler custom-button d-md-none" type="button" onClick={toggleNav}>{isNavOpen ? <FaTimes /> : <FaBars />}</button>
            </div>


            <div ref={navRef} className={`col-md-8 collapse navbar-collapse flex-column py-0  ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <h1 className="d-none d-md-block mb-4">Fragances.net</h1>
                <ul className="navbar-nav mt-2 mt-md-0">
                    
                    <li className="nav-item">
                        <Link className="nav-link py-0 py-2" to={"ofertas"}>
                            Ofertas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-0  py-2" to={"masvendidos"}>
                            Mas Vendidos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-0  py-2" to={"/category/hombre"}>
                            Para Ellos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-0  py-2" to={"/category/mujer"}>
                            Para Ellas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-0  py-2" to={"/category/unisex"}>
                            Para Todos
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={`col-2 col-md-2 d-none d-md-flex justify-content-end align-items-center ${isNavOpen ? 'justify-content-start' : ''}`}>
                <CartWidget />
            </div>
        </div>
    </div>
    </div>
);
};

export default NavBar;

