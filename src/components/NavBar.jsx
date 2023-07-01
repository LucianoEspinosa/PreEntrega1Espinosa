import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "./CartWidget";
import logo from "./img/logo-texto2.png";

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

    return (
        <div className="container fixed-top cabecera ">
            <nav className="row navbar navbar-expand-md fs-7 fs-md-5 d-flex align-items-center" onScroll={handleScroll}>
                <Link to={"/"} className="col-2 d-md-flex">
                    <img src={logo} className="w-50" alt="logo de fragances.net" />
                </Link>

                <Collapse in={isNavOpen}>
                    <div ref={navRef} className="collapse navbar-collapse justify-content-md-center col-md-8 py-0" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"ofertas"}>
                                    Ofertas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"masvendidos"}>
                                    Mas Vendidos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/category/hombre"}>
                                    Para Ellos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/category/mujer"}>
                                    Para Ellas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/category/unisex"}>
                                    Para Todos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Collapse>
                <div className="col-1 col-md-2 d-flex">
                    <CartWidget />
                    <button className="col-1  navbar-toggler custom-button d-md-none" type="button" onClick={toggleNav}>
                        {isNavOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

            </nav>
        </div>
    );
};

export default NavBar;



// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Collapse } from "react-bootstrap";
// import CartWidget from "./CartWidget";
// import logo from "./img/fragancesnet.png";

// const NavBar = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const navRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (navRef.current && !navRef.current.contains(event.target)) {
//                 setIsNavOpen(false);
//             }
//         };

//         const handleScroll = () => {
//             setIsNavOpen(false);
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const toggleNav = () => {
//         setIsNavOpen(!isNavOpen);
//     };

//     return (
//         <nav className="container navbar navbar-expand-md fs-7 fs-md-5 d-flex align-items-center">
//             <Link to={"/"} className="col-2 d-md-flex d-none">
//                 <img src={logo} alt="logo de fragances.net" width={36} />
//             </Link>
//             <button
//                 className="navbar-toggler custom-button d-md-none"
//                 type="button"
//                 onClick={toggleNav}
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <Collapse in={isNavOpen}>
//                 <div
//                     ref={navRef}
//                     className="collapse navbar-collapse justify-content-md-center col-md-8"
//                     id="navbarNav"
//                 >
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to={"ofertas"}>
//                                 Ofertas
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to={"masvendidos"}>
//                                 Mas Vendidos
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to={"/category/hombre"}>
//                                 Para Ellos
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to={"/category/mujer"}>
//                                 Para Ellas
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to={"/category/unisex"}>
//                                 Para Todos
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </Collapse>
//             <div className="col-md-2">
//                 <CartWidget />
//             </div>
//         </nav>
//     );
// };

// export default NavBar;





// import CartWidget from "./CartWidget";
// import { NavLink, Link } from "react-router-dom";
// import logo from "./img/fragancesnet.png";
// import { NavDropdown } from "react-bootstrap"; // Agregar esta líneanp


// const NavBar = () => {
//     return (
//         <nav className="container navbar navbar-expand-md fs-7 fs-md-5 d-flex align-items-baseline">

//             <Link to={"/"} className="col-2 d-md-flex d-none "><img src={logo} alt="logo de fragances.net" width={36} /></Link>
//             <button className="navbar-toggler custom-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse  justify-content-md-center col-md-8" id="navbarNav">
//                 <ul className="navbar-nav">
//                     <li className="nav-item"><NavLink className="nav-link" to={"ofertas"}>Ofertas</NavLink></li>
//                     <li className="nav-item"><NavLink className="nav-link" to={"masvendidos"}>Mas Vendidos</NavLink></li>
//                     <li className="nav-item"><NavLink className="nav-link" to={"/category/hombre"}>Para Ellos</NavLink></li>
//                     <li className="nav-item"><NavLink className="nav-link" to={"/category/mujer"}>Para Ellas</NavLink></li>
//                     <li className="nav-item"><NavLink className="nav-link" to={"/category/unisex"}>Para Todos</NavLink></li>
//                 </ul>
//             </div>
//             <div className="col-md-2">
//                 <CartWidget />
//             </div>

//         </nav>
//     );
// }

// export default NavBar;